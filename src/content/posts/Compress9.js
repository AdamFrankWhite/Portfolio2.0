import React from "react";
import Highlight from "react-highlight.js";
export default function Compress9() {
    return (
        <div class="blog-post">
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ornare diam et tempus semper. Integer pharetra, metus sit amet
                euismod elementum, nulla nisl finibus est, in dictum dui dui
                ornare turpis. Vestibulum a euismod metus, et volutpat quam.
                Maecenas auctor metus quis viverra aliquam. Maecenas convallis
                imperdiet porttitor. Mauris interdum, orci egestas rhoncus
                condimentum, turpis velit convallis eros, in posuere eros purus
                in diam. Ut cursus leo ac augue elementum, id congue tortor
                elementum. Nam convallis blandit ipsum, non pulvinar dolor
                sodales eget. Suspendisse et massa ultricies, tempor est at,
                luctus magna.",
            </p>
            <Highlight language={"javascript"}>
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
            </Highlight>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus turpis, ullamcorper vel tortor ac, tristique lacinia dui.
                Proin dignissim mi ac tortor suscipit, ac sagittis risus
                feugiat. Curabitur a enim nunc. Nunc feugiat efficitur diam eget
                aliquam. Quisque eget pharetra libero, sed malesuada eros.
                Pellentesque pharetra rutrum magna, et bibendum metus gravida
                et.
            </p>

            <p>
                Phasellus sodales urna mauris, sed sollicitudin tortor
                condimentum sit amet. Nulla facilisi. Phasellus sagittis orci
                sed dictum posuere. Curabitur volutpat iaculis elit ut auctor.
                Praesent ac eros laoreet enim vehicula maximus a non velit.
                Donec a lectus hendrerit elit eleifend vehicula. Pellentesque
                nec orci vehicula, iaculis tortor eget, eleifend augue. Nulla eu
                lectus quis turpis aliquet aliquet.
            </p>

            <p>
                Suspendisse odio orci, euismod id euismod vitae, consectetur nec
                sapien. Aliquam a euismod mi, lacinia vehicula orci. Vestibulum
                ex ipsum, finibus vitae mattis non, maximus non libero. In id
                pellentesque erat, quis lacinia felis. Curabitur vitae magna
                mollis, fringilla massa in, posuere nunc. Quisque in tristique
                ipsum. Nullam ultrices nibh quis purus mollis, eget condimentum
                tortor sollicitudin. Suspendisse aliquam eros vitae neque
                consequat tristique. Sed sed arcu vitae sapien fermentum blandit
                in a est. Maecenas egestas porta nibh in sollicitudin.
            </p>

            <p>
                Pellentesque elementum cursus mauris eu eleifend. Integer et
                justo tempor, varius felis id, sodales quam. Maecenas iaculis
                imperdiet nisl, in porttitor purus posuere at. Donec elementum,
                metus nec tincidunt aliquet, velit sapien aliquam elit,
                vulputate placerat erat mauris quis lectus. Mauris posuere orci
                nulla, at ullamcorper eros interdum quis. Curabitur id tellus
                quis tortor vestibulum venenatis. Aliquam porttitor lectus eu
                velit accumsan auctor. Aenean nisi sapien, consectetur ut est
                sed, tempor lacinia velit. Etiam id libero velit. Praesent eget
                metus consectetur, lacinia enim vitae, pretium sem.
            </p>
        </div>
    );
}
