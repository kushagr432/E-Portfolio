const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        '102': '1.02',
      },
      width: {
        '128': '36rem',
      },
      colors: {
       Gray:{
        900:"#212121",

       }
      },
    },
    
  },
  plugins: [],
});