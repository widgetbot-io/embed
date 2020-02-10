import React, { createContext, useContext, useReducer } from "react";
import { AuthStore } from "../stores/auth";
import {inject} from "mobx-react";

interface Props {
    AuthStore?: AuthStore;
    cache?: [[string, { [key: string]: string; }]]
}

interface LocaleContextState {
    cur: string;
    cache: { [key: string]: { [key: string]: string; } };
}

const LocaleContext = createContext({});

const reducer = (state: LocaleContextState, action: { type: string; body: any }) => {
    switch (action.type) {
        case "SET_LOCALE": return { ...state, cur: action.body };
        default: return state;
    }
};

const Init = ({ children, cur, cache }) => {
    const [state, dispatch] = useReducer(reducer, { cur, cache });
    return <LocaleContext.Provider value={{ state, dispatch }}>{children}</LocaleContext.Provider>;
};

@inject("AuthStore")
export class Locale extends React.Component<Props, { cache: { [key: string]: { [key: string]: string; } } }> {

    constructor(props) {
        super(props);
        this.state = { cache: {} };
    }

    async componentDidMount() {
        this.setState({
            cache: {
                en: (await import("../locales/en.json")) as any
            }
        });
    }

    static translate(key: string, replacements?: { [key: string]: string; }) {
        const { state: { cur, cache } }: any = useContext(LocaleContext);
        let lang: any = cache[cur], content: string;
        if (!lang) {
            if (cache["en"] && cache["en"][key]) {
                lang = cache["en"];
            } else {
                return key;
            }
        }
        if (!lang[key]) return key;
        if (!replacements) return lang[key];
        content = lang[key];
        for (const replace in replacements) {
            const use: any = replacements[replace];
            content = content.replace(new RegExp(`{${replace}}`, "g"), use);
        }
        return content;
    };

    render() {
        if (Object.keys(this.state.cache).length < 1) return null;
        return <Init cur={this.props.AuthStore.locale} cache={this.state.cache}>{this.props.children}</Init>;
    }

}