module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          backgroundColor: {
            battlenet: "#0070DE",
            "battlenet-light": "#1C4A8E",
            google: "#DB4437",
            "google-light": "#A52714",
            primary: "#202126",
            secondary: "#2A2B2F",
          },
          fontFamily: {
            'nunito': 'Nunito'
          },
          boxShadow: {
            
          }
        },
    },
    variants: {
      extend: {},
    },
    plugins: [],
    mode: 'jit', // adicionado para ativar o modo Just-In-Time
  }
  