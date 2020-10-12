import React from "react";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            didLoad: false,
        };
    }
    onLoad = () => {
        this.setState({
            didLoad: true,
        });
    };
    render() {
        const style = this.state.didLoad ? {} : { visibility: "hidden" };
        return (
            <section
            // style={style}
            // className="home slide-in"
            // onLoad={this.onLoad}
            >
                <div className="main slide-in">
                    <h2 className="headline">Web Design and Development</h2>
                    <h3>Custom, hand-coded web design for your business</h3>
                    <div className="cta-cont">
                        <a href="">Web Design Portfolio</a>
                        <a href="#pricing">Web Design Pricing</a>
                        <a href="">Web Design FAQs</a>
                    </div>
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
                    {/* <div className="block-div"></div> */}
                </div>
            </section>
        );
    }
}
