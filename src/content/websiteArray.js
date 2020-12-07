const websites = [
    {
        name: "Heatons Cats",
        tech: "Wordpress, HTML, SASS, JavaScript",
        desc:
            "Responsive custom Wordpress Theme written with HTML, JavaScript, PHP and SASS",
        img: "assets/heatons-min.png",
        link: "http://heatonscats.org.uk",
        code: "https://github.com/AdamFrankWhite/Heatons-Cats",
        text: [
            "Heatons Cats had an existing Wordpress site that they updated regularly. Familiar with the CMS, I suggested creating a custom theme to keep it easily maintainable.",
            "After creating a couple of mockups using Adobe XD, and following their choice of design, I went about creating a custom Wordpress theme. Dissatisfied with the lack of customisation over slider plugins, I created a responsive slider using jQuery. I also created the ability for the user to add post subheadings using a dash as a delimiter in the post title. Used All-in-One SEO plugin.",
        ],
        bgClass: "heatons",
    },
    {
        name: "E-book landing page",
        tech: "Wordpress, HTML, CSS, jQuery",
        desc: "Ebook Sales Landing page with Wordpress blog",
        img: "assets/ebook-min.jpg",
        link: "http://quittingweedthebook.com",
        code: "https://github.com/AdamFrankWhite/Landing-Page-1",
        text: [
            "Requiring an ebook landing page, along with an easily maintainable blog. I created the landing page in plain HTML, CSS, JavaScript, before integrating the blog. I used the Monster Insights plugin for analytics.",
            "With the goal of keeping the main landing page lightweight, I opted to integrate a Wordpress blog into a sub-directory. Using the same stylesheet and design, I created a simple custom theme with a custom JavaScript blog gallery.",
        ],
        bgClass: "quitweed",
    },
    {
        name: "KDP Royalty Converter",
        tech: "React, Node, Express, CSS",
        desc:
            "Simple SPA converting uploaded Kindle Author royalty .xlsx files into various currencies ",
        img: "assets/kdp-min.jpg",
        link: "http://kdp-royalty-converter.com",
        code: "https://github.com/AdamFrankWhite/KDP-Sales-Converter-Client",
        text: [
            "Frustrated by the lack of clarity of Kindle author royalty reports, with different currencies making it hard to calculate royalties at a glance, I created a simple app to convert royalties to a chosen currency.",
            "The front end is built using React, using a currency converter API and React Hooks for a smooth user experience. On the back end, a simple Express server, hosted on Heroku, uses an external API to conver an .xlsx upload to JSON, which the React front end visualises in table format. Fun to make, it solved a niggling problem.",
        ],
        bgClass: "kdp",
    },
    {
        name: "BeerBookmark",
        tech: "React, Redux, CSS, Node, MongoDB",
        desc: "Lorem ipsum bla bla bla",
        img: "assets/beerme-min.jpg",
        link: "https://beerbookmark.herokuapp.com/",
        code: "https://github.com/AdamFrankWhite/Beer-App",
        text: [
            "Wanting to delve into full-stack development, I created a app that could let you bookmark your favourite beers, using Untappd's data API. Built with React and Material UI on the front-end; the back end uses Node and MongoDB. Uses bcrypt for encryption",
            "Back-end deployed using Heroku",
        ],
        bgClass: "beerbookmark",
    },
    // {
    //     name: "Kakuro",
    //     tech: "React, CSS",
    //     desc: "Logic puzzle built using React",
    //     img: "assets/kakuro-min.jpg",
    //     link: "http://quittingweedthebook.com",
    //     code: "https://github.com/AdamFrankWhite/Kakuro",
    //     text: [
    //         "An avid logic puzzle fan, I thought it would be an interesting learning process to create a Kakuro app using React. Unfamiliar with React at the time, this project was a good learning experience in React, as well as thinking logically to create the program - from how to structure the grid, choosing a suitable data structure for storing the game board, answers and user answers."
    //     ]
    // },
    // {
    //     name: "NASA Image App",
    //     tech: "React, CSS",
    //     desc:
    //         "Mesmerised by the beauty of nebulae, another early React project saw me use the NASA API to create a simple image search app.",
    //     img: "assets/nasa-app-min.jpg",
    //     link: "http://quittingweedthebook.com",
    //     code: "https://github.com/AdamFrankWhite/Nasa-Nebulae-Search",
    //     text: [
    //         "Mesmerised by the beauty of nebulae, another early React project saw me use the NASA API to create a simple image search app."
    //     ]
    // }
];

export default websites;
