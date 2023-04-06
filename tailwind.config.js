module.exports = {
  content: ["./src/*.html"],
  theme: {
   
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '40px',
      '7xl': '44px',
      '8xl': '54px',
      '9xl': '64px',


    },
    extend: {
      colors : {
        'c1' : '#286F62',
        'c1-d' : '#185046',  
        'c2' : '#2e4968',
        'c2-d' : '#334a64',  
        'c3' : '#6f284d',
        'c3-d' : '#50182f',
        'c4' : '#fff',
        'c4-d' : '#fbfbfb'
      },

      backgroundImage: (theme) => ({
        'gradient-1': `linear-gradient(to bottom, ${theme('colors.c1')}, ${theme('colors.c1-d')})`,
        'gradient-2': `linear-gradient(to bottom, ${theme('colors.c2')}, ${theme('colors.c2-d')})`,
        'gradient-3': `linear-gradient(to bottom, ${theme('colors.c3')}, ${theme('colors.c3-d')})`,
        'gradient-w': `linear-gradient(to bottom, ${theme('colors.c4')}, ${theme('colors.c4-d')})`,

  
      }),
  
      fontFamily: {
        'exo': ['Exo', 'sans-serif'],
        'scope-one': ['Scope One', 'serif'],
        'dosis': ['Dosis', 'sans-serif'],
        'merriweather': ['Merriweather Sans'],
        'mohave': ['Mohave'],
        'londrina': ['Londrina Solid', 'cursive']

      }

    },
  },
  plugins: [],
}