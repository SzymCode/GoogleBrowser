module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        c: "0 1px 6px rgb(32 33 36 / 28%)",
        c2: "0 1px 1px rgb(0 0 0 / 10%)"
      },
      colors: {
        primary: {
          lightborder: '#E8E8E8',
          lightgray: '#F8F9FA',
          gray: '#DAECE0',
          gray1: '#F2F2F2',
          gray2: '#DFE1E5',
          gray3: '#70757a',
          dark: '#5F6368',
          dark1: '#7A808C',
          darker: '#262626',
          blue: '#1A73E8'
        }
      }
    }
  },
  plugins: []
}