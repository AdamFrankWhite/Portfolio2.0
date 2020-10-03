const projects = [
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
            "The front end is built using React, using a currency converter API and React Hooks for a smooth user experience. On the back end, a simple Express server, hosted on Heroku, uses an external API to conver an .xlsx upload to JSON, which the React front end visualises in table format. Fun to make, it solved a niggling problem."
        ]
    },
    {
        name: "BeerBookmark",
        tech: "React, Redux, CSS, Node, MongoDB",
        desc: "Lorem ipsum bla bla bla",
        img: "assets/beerme-min.jpg",
        link: "http://quittingweedthebook.com",
        code: "https://github.com/AdamFrankWhite/Landing-Page-1",
        text: [
            "Client requested an ebook landing page, along with an easily maintainable blog. I created the landing page in plain HTML, CSS, JavaScript, before integrating the blog. I used the Monster Insights plugin for analytics.",
            "With the goal of keeping the main landing page lightweight, I opted to integrate a Wordpress blog into a sub-directory. Using the same stylesheet and design, I created a simple custom theme with a custom JavaScript blog gallery."
        ]
    },
    {
        name: "Kakuro",
        tech: "React, CSS",
        desc: "Logic puzzle built using React",
        img: "assets/kakuro-min.jpg",
        link: "http://quittingweedthebook.com",
        code: "https://github.com/AdamFrankWhite/Kakuro",
        text: [
            "An avid logic puzzle fan, I thought it would be an interesting learning process to create a Kakuro app using React. Unfamiliar with React at the time, this project was a good learning experience in React, as well as thinking logically to create the program - from how to structure the grid, choosing a suitable data structure for storing the game board, answers and user answers."
        ]
    },
    {
        name: "NASA Image App",
        tech: "React, CSS",
        desc:
            "Mesmerised by the beauty of nebulae, another early React project saw me use the NASA API to create a simple image search app.",
        img: "assets/nasa-app-min.jpg",
        link: "http://quittingweedthebook.com",
        code: "https://github.com/AdamFrankWhite/Nasa-Nebulae-Search",
        text: [
            "Mesmerised by the beauty of nebulae, another early React project saw me use the NASA API to create a simple image search app."
        ]
    }
];

export default projects;
