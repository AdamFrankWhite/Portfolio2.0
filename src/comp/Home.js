import React from "react";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            didLoad: false
        };
    }
    onLoad = () => {
        this.setState({
            didLoad: true
        });
    };
    render() {
        const style = this.state.didLoad ? {} : { visibility: "hidden" };
        return (
            <section
                style={style}
                className="home slide-in"
                onLoad={this.onLoad}
            >
                <div className="main">
                    <h2 className="headline">
                        I create minimalist, functional, responsive,
                        cross-browser web sites and apps
                    </h2>
                    <div className="icon-cont">
                        <img
                            className="tablet-mobile"
                            src="assets/icons/icons8-smartphone-tablet-256.png"
                            alt="tree"
                        />
                        <img
                            className="laptop"
                            src="assets/icons/icons8-laptop-400.png"
                            alt="tree"
                        />

                        <img
                            className="monitor"
                            src="assets/icons/icons8-monitor-400.png"
                            alt="tree"
                        />
                    </div>
                    <div className="block-div"></div>
                </div>
            </section>
        );
    }
}
