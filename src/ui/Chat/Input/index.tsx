import * as React from "react";

import { Root, Textarea } from "./elements";
import Suggestions from "./Suggestions";
import Channels from "./suggestions/channels";
import Commands from "./suggestions/commands";
import Emojis from "./suggestions/emojis";
import Mentions from "./suggestions/mentions";
import extractQuery from "./utils/extractQuery";
import injectValue from "./utils/injectValue";
import { ChatProps } from "../Chat";
import { inject, observer } from "mobx-react";
import { AuthStore } from "../../../stores/auth";

interface Props extends ChatProps {
  innerRef?: (textarea: HTMLTextAreaElement) => void;
  innerProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
  AuthStore?: AuthStore;
  onChange?: Function;
  onKeyPress?: Function;
  onSubmit?: Function;
}

export const handlers = [Emojis, Mentions, Commands, Channels];

@inject("AuthStore")
@observer
class MagicTextarea extends React.Component<Props> {
  initialState = {
    leftIndex: -1,
    caretPosition: -1,

    showSuggestions: false,
    handler: null,

    query: null
  };

  state = this.initialState;
  resetState = () => this.setState(this.initialState);

  getValue = () => this.textarea.value;
  textarea: HTMLTextAreaElement;
  suggestions: Suggestions;

  onChange(value) {
    const { onChange } = this.props;

    onChange && onChange(value);
  }

  render() {
    return this.props.AuthStore.user ? (
      <Root>
        <Textarea
          {...this.props.innerProps}
          innerRef={ref => {
            const { innerRef } = this.props;

            this.textarea = ref;
            innerRef && innerRef(ref);
          }}
          onChange={event => this.onChange(event.target.value)}
          onClick={this.resetState}
          onKeyDown={event => {
            switch (event.key) {
              case "ArrowUp":
              case "ArrowDown":
                if (!this.suggestions) return;

                this.suggestions.traverseSuggestions(event.key === "ArrowDown");
                event.preventDefault();
                return;
              case "Tab":
                if (!this.suggestions) return;

                this.suggestions.selectSuggestion();
                event.preventDefault();
                return;
              case "Enter":
                if (this.state.showSuggestions) {
                  this.suggestions && this.suggestions.selectSuggestion();
                  event.preventDefault();
                  return;
                }

                if (!event.shiftKey) {
                  const { onSubmit, onChange } = this.props;

                  // Submit
                  onSubmit && onSubmit(this.textarea.value);
                  onChange && onChange("");
                  event.preventDefault();
                }

                return;
              case "Escape":
                this.resetState();
                break;
              default:
                if (this.props.onKeyPress) this.props.onKeyPress(event);
                break;
            }
          }}
          onInput={() => {
            const { query, ...rest } = extractQuery(this.textarea);
            this.setState({ ...rest, showSuggestions: false });

            // Find a parser for the selected query
            for (const handler of handlers) {
              const parsedQuery = handler.extract(query, this.textarea);

              if (typeof parsedQuery === "string") {
                this.setState({
                  showSuggestions: true,
                  query: parsedQuery,
                  handler
                });
                break;
              }
            }
          }}
        />

        {this.state.showSuggestions && (
          <Suggestions
            ref={ref => (this.suggestions = ref)}
            query={this.state.query}
            handler={this.state.handler}
            onSelect={suggestion => {
              const { handler, leftIndex, caretPosition } = this.state;

              if (suggestion) {
                const text = injectValue({
                  input: this.textarea,
                  value: handler.toString(suggestion),
                  leftIndex,
                  caretPosition
                });

                this.onChange(text);
              }

              this.resetState();
            }}
          />
        )}
      </Root>
    ) : (
      <p
        style={{
          opacity: 0.4,
          marginTop: "10px",
          marginBottom: 0,
          marginLeft: "10px"
        }}
      >
        You do not have permission to send messages in this channel.
      </p>
    );
  }
}

export default MagicTextarea;
