import React from "react";
import Highlight from "react-highlight.js";
export default function BrowserCompatibility() {
    return (
        <div className="blog-post browser-comp">
            <p>
                When developing for the web, browser compatibility is important
                to consider. People view the web through different browsers, and
                those browsers may intepret CSS styling slightly differently.
                This means that, as a front-end developer, you need to be ensure
                your web projects look consistently good across browsers - so
                everyone viewing the site/app gets a similar UX experience.
            </p>
            <p>
                First, we will explore the variety of browsers that make up the
                web ecosystem, and ask ourselves, why does it matter? Then,
                we'll cover the issues surrounding compatibility; finally, we
                consider various solutions and resources.{" "}
            </p>
            {/* <Highlight language={"javascript"}>
                {`
            import React from "react";
            import Compress from "./posts/Compress";
            const posts = [
                {
                    title: "Compressing images for faster load times - progressive jpgs are your friend",
                    content: <Compress />,
                    path: "compressing-images-for-faster-load-times"
                },
                {
                    title: "Keeping multiple images uniform - handy CSS tips",
                    content: [],
                    path: "keeping-multiple-images-uniform"
                }
            ];
            `}
            </Highlight> */}
            <img src="/assets/blog/browsers-min.png" alt="browers" />
            <p>
                As of September 2020, the web browser market share is dominated
                by the top 5 companies: altogether, they account for over 90% of
                user web browsers. (Source: w3 counter)
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Browser</th>
                        <th style={{ width: "100%" }}>Market Share</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chrome</td>
                        <td className="pc-cont">
                            <span
                                style={{
                                    width: "62.6%",
                                    display: "block",
                                    background: "darkgreen",
                                    color: "white",
                                }}
                            ></span>
                            <span>62.6%</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Safari</td>
                        <td className="pc-cont">
                            <span
                                style={{
                                    width: "18%",
                                    display: "block",
                                    background: "red",
                                    color: "white",
                                }}
                            ></span>
                            <span>18.0%</span>
                        </td>
                    </tr>
                    <tr>
                        <td>IE / Edge</td>
                        <td className="pc-cont">
                            <span
                                style={{
                                    width: "6.3%",
                                    display: "block",
                                    background: "black",
                                    color: "white",
                                }}
                            ></span>
                            <span>6.3%</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Firefox</td>
                        <td className="pc-cont">
                            <span
                                style={{
                                    width: "4.8%",
                                    display: "block",
                                    background: "blue",
                                    color: "white",
                                }}
                            ></span>
                            <span>4.8%</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Opera</td>
                        <td className="pc-cont">
                            <span
                                style={{
                                    width: "1.6%",
                                    display: "block",
                                    background: "orange",
                                    color: "white",
                                }}
                            ></span>
                            <span>1.6%</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>
                As you can see, Chrome is by far the most used browser, however
                still only account for just under two-thirds of overall browser
                usage. Up until recently, Internet Explorer had a much larger
                share, and was notoriously slow at supporting various HTML/CSS
                features making it frustrating for developers trying to design
                cross-browser support. If you only design and test your site on
                Chrome, that means that 1 in 3 of your site's potential visitors
                will get a different, sub-standard experience - not good if you
                are trying to promote a product or service, or just appearing
                professional. This is why you have to take care of cross-browser
                support.
            </p>
            <h3>Vendor Prefixes</h3>
            <hr />
            <p>
                The solution to this is vendor prefixes. Here are the main
                vendor prefixes:
            </p>
            <ul>
                <li>
                    -webkit- (Chrome, Safari, newer versions of Opera, almost
                    all iOS browsers including Firefox for iOS; basically, any
                    WebKit based browser)
                </li>
                <li>-moz- (Firefox)</li>
                <li>-o- (old pre-WebKit versions of Opera)</li>
                <li>-ms- (Internet Explorer and Microsoft Edge)</li>
            </ul>
            <p>
                When writing CSS code, you need to add extra rules to cater for
                different browsers. For example, let's say you are creating a
                simple grid layout using <code>grid</code>. To check the support
                across browsers, check out <a href="caniuse.com">caniuse.com</a>
                , a handy resource for front-end developers. As you'll notice,
                grid does not have ubiquitous support:
            </p>
            <img src="/assets/blog/caniuse-min.png"></img>
            <p>
                Now, if we hover over IE 11 for example, we can see that it
                accounts for 1.22% of global users, which represents a lot of
                people. You can see it gives us advice on providing support:
            </p>
            <img src="/assets/blog/caniuse2-min.png" />
            <p>
                So, by adding <code>-ms-display: grid</code>, we ensure our IE
                11 users have no problems viewing our grid.
            </p>
            <p>
                Now, as you can imagine, this can get rather tedious when coding
                an entire stylesheet. This is where prefixers come into play.{" "}
            </p>
            <p>
                There are numerous prefixers out there - I like using a VS Code
                extension called Autoprefixer, that, as its name suggests,
                automatically prefixes your code on save to ensure cross-browser
                support. When you add{" "}
                <code>animation: slide-down 0.8s forwards</code> to your
                stylesheet, the output saved is{" "}
                <code>
                    -webkit-animation: slide-down 0.8s forwards;
                    <br /> animation: slide-down 0.8s forwards;
                </code>
            </p>
            <h3>Conclusion</h3>
            <hr />
            <p>
                For accessibility and a smooth user experience, it is important
                to make sure your CSS is compatibility across a range of
                browsers. This has been much easier in recent yers, with an
                increased market share of the most popular browsers - Chrome and
                Opera - an increased adoption of rendering engines, plus the
                growth of prefixers. It has never been easier to ensure your
                site or app is able to be utilised and experienced fully by the
                maximum number of people.
            </p>
        </div>
    );
}
