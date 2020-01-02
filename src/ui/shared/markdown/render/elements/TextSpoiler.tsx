import React, { PureComponent } from "react";

interface Props {
    content: string;
}

interface State {
    showing: boolean,
    hover: boolean,
    role: string
}

export default class TextSpoiler extends PureComponent<Props, State> {
    public state = { showing: false, hover: false, role: "button" };

    constructor(props) {
        super(props);
        this.onHover = this.onHover.bind(this);
        this.onClick = this.onClick.bind(this);
        this.computeStyle = this.computeStyle.bind(this);
    }

    onHover() {
        if (this.state.showing) return;
        this.setState({ hover: !this.state.hover });
    }

    onClick() {
        if (this.state.showing) return;
        this.setState({ showing: true, role: "presentation" });
    }

    computeStyle() {
        if (this.state.showing) return { background: "hsla(0, 0%, 100%, .1)", color: "inherit", borderRadius: "3px" };
        if (this.state.hover) return { background: "rgba(0, 0, 0, 31%)", color: "rgba(0, 0, 0, 0%)", cursor: "pointer", borderRadius: "3px" };
        return { background: "rgba(0, 0, 0, 41%)", color: "rgba(0, 0, 0, 0%)", borderRadius: "3px" };
    }

    render() {
        return (
            <span role={this.state.role} style={this.computeStyle()} onClick={this.onClick}  onMouseEnter={this.onHover} onMouseLeave={this.onHover}>
                {this.props.content}
            </span>
        );
    }

}
