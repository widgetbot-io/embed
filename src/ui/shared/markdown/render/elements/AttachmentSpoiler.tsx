import React, { PureComponent } from "react";
import { Image, SpoilerImage } from "../../../../Message/Embed/elements/media";

interface Props {
    src: string
    height?: number
    width?: number
};

export default class AttachmentSpoiler extends PureComponent<Props, any> {

    constructor(props) {
        super(props);
        this.state = { showing: false, hovering: false };
        this.onHover = this.onHover.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onHover() {
        this.setState({ hovering: !this.state.hovering });
    }

    onClick() {
        if (this.state.showing) return;
        this.setState({ showing: true });
    }

    render() {
        if (this.state.showing) return <Image src={this.props.src} height={this.props.height} width={this.props.width} />;
        return (
            <div 
                style={{ textAlign:"center", display:"inline-block", cursor: "pointer" }}
                onClick={this.onClick}
                onMouseEnter={this.onHover}
                onMouseLeave={this.onHover}
            >
                <div style={{
                    display: "inline-block",
                    position: "absolute",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    textTransform: "uppercase",
                    color: "#dcddde",
                    backgroundColor: this.state.hovering ? "rgba(0, 0, 0, 80%)" : "rgba(0, 0, 0, 60%)",
                    padding: "8px 12px",
                    borderRadius: "20px",
                    zIndex: 1
                }}>
                    spoiler
                </div>
                <SpoilerImage src={this.props.src} height={this.props.height} width={this.props.width} />
            </div>
        );
    }

}
