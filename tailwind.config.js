/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {

      colors:{
        customGreen: '#1ECB15',
        customBlue:'#031B4E',
      },


      // New font style added 
      fontFamily : {

        'Montserrat': ['Montserrat', 'sans-serif']

      },

           // to add different images for parrallex effect 
           backgroundImage: {
            'image1': "url('/assets/images/mainbg.jpg')",
            'image2': "url('/assets/images/carpark.jpg')",
    
          },
            

    },
  },
  plugins: [],
}