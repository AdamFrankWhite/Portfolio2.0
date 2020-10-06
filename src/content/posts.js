import React from "react";
import Compress from "./posts/Compress";
import Compress2 from "./posts/Compress2";
import Compress3 from "./posts/Compress3";
import Compress4 from "./posts/Compress4";
import Compress5 from "./posts/Compress5";
import Compress6 from "./posts/Compress6";
import Compress7 from "./posts/Compress7";
import Compress8 from "./posts/Compress8";
import UseEffectPost from "./posts/UseEffectPost";
import Refactoring from "./posts/Refactoring";
const posts = [
    {
        title:
            "Compressing images for faster load times - progressive jpgs are your friend",
        content: <Compress />,
        path: "compressing-images-for-faster-load-times",
        snippet: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunornare diam et tempus semper. Integer pharetra, metus sit ameteuismod elementum, nulla nisl finibus est, in dictum dui duiornare turpis. Vestibulum a euismod metus, et volutpat quam. Maecenas auctor metus quis viverra aliquam. Maecenas convallis imperdiet porttitor."
        ],
        category: "Performance"
    },
    {
        title: "Keeping multiple images uniform - handy CSS tips",
        content: <Compress2 />,
        path: "keeping-multiple-images-uniform",
        snippet: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunornare diam et tempus semper. Integer pharetra, metus sit ameteuismod elementum, nulla nisl finibus est, in dictum dui duiornare turpis. Vestibulum a euismod metus, et volutpat quam. Maecenas auctor metus quis viverra aliquam. Maecenas convallis imperdiet porttitor."
        ],
        category: "CSS/SASS"
    },
    {
        title: "Wordpress Theme Development",
        content: <Compress3 />,
        path: "wordpress-theme-development",
        snippet: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunornare diam et tempus semper. Integer pharetra, metus sit ameteuismod elementum, nulla nisl finibus est, in dictum dui duiornare turpis. Vestibulum a euismod metus, et volutpat quam. Maecenas auctor metus quis viverra aliquam. Maecenas convallis imperdiet porttitor."
        ],
        category: "Wordpress"
    },
    {
        title: "React Hooks - useState()",
        content: <Compress4 />,
        path: "react-hooks",
        snippet: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunornare diam et tempus semper. Integer pharetra, metus sit ameteuismod elementum, nulla nisl finibus est, in dictum dui duiornare turpis. Vestibulum a euismod metus, et volutpat quam. Maecenas auctor metus quis viverra aliquam. Maecenas convallis imperdiet porttitor."
        ],
        category: "React"
    },
    {
        title: "Keeping Files Small",
        content: <Compress5 />,
        path: "keeping-files-small",
        snippet: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunornare diam et tempus semper. Integer pharetra, metus sit ameteuismod elementum, nulla nisl finibus est, in dictum dui duiornare turpis. Vestibulum a euismod metus, et volutpat quam. Maecenas auctor metus quis viverra aliquam. Maecenas convallis imperdiet porttitor."
        ],
        category: "Performance"
    },
    {
        title: "Why React Rules",
        content: <Compress6 />,
        path: "why-react-rules",
        snippet: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunornare diam et tempus semper. Integer pharetra, metus sit ameteuismod elementum, nulla nisl finibus est, in dictum dui duiornare turpis. Vestibulum a euismod metus, et volutpat quam. Maecenas auctor metus quis viverra aliquam. Maecenas convallis imperdiet porttitor."
        ],
        category: "React"
    },
    {
        title: "When to use Wordpress",
        content: <Compress7 />,
        path: "when-to-use-wordpress",
        snippet: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunornare diam et tempus semper. Integer pharetra, metus sit ameteuismod elementum, nulla nisl finibus est, in dictum dui duiornare turpis. Vestibulum a euismod metus, et volutpat quam. Maecenas auctor metus quis viverra aliquam. Maecenas convallis imperdiet porttitor."
        ],
        category: "Wordpress"
    },
    {
        title: "Why SASS is amazing",
        content: <Compress8 />,
        path: "why-sass-is-amazing",
        snippet: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunornare diam et tempus semper. Integer pharetra, metus sit ameteuismod elementum, nulla nisl finibus est, in dictum dui duiornare turpis. Vestibulum a euismod metus, et volutpat quam. Maecenas auctor metus quis viverra aliquam. Maecenas convallis imperdiet porttitor."
        ],
        category: "CSS/SASS"
    },
    {
        title:
            "Using useEffect() to solve asynchronous useState() rendering issues",
        content: <UseEffectPost />,
        path: "using-useeffect-to-solve-async",
        snippet: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunornare diam et tempus semper. Integer pharetra, metus sit ameteuismod elementum, nulla nisl finibus est, in dictum dui duiornare turpis. Vestibulum a euismod metus, et volutpat quam. Maecenas auctor metus quis viverra aliquam. Maecenas convallis imperdiet porttitor."
        ],
        category: "React"
    },
    {
        title: "Refactoring React Components",
        content: <Refactoring />,
        path: "react-components",
        snippet: [
            "Here we have a menu that we wish to do a few things with. Note how the code is repeated. We can fix this using the ever-handy .map() method."
        ],
        category: "React"
    },
    {
        title: "Useful React packages",
        content: <Refactoring />,
        path: "useful-react-packages",
        snippet: [
            "react-highlight.js react-loader-spinner react-responsive",
            "Here we have a menu that we wish to do a few things with. Note how the code is repeated. We can fix this using the ever-handy .map() method."
        ],
        category: "React"
    }
];

export default posts;
