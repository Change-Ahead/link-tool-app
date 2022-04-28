module.exports = {
    content: ["./src/**/*.{tsx,jsx,html}"],
    theme: {
        extend: {
            colors: {
                "brand-red": "#ff2152",
                "brand-blue": "#3668c9",
            },
            height: {
                "96": "24rem",
            },
            boxShadow: {
                "solid": "3px 3px 0px 1px rgba(0,0,0,0.75);",
            }
        },
    },
    plugins: [],
};