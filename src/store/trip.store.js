
export const tripStore = {
    state: {

      trip:  { 
        startDate: "2025/10/15",
        endDate: "2025/10/17",
        guests: {
          adults: 2,
          kids: 1
        },
        loc: {
          country: 'Portugal',
          countryCode: 'PT',
          address: 'Porto, Portugal',
          lat: '-8.61308',
          lng:' 41.1413'
        }
      },

    },
    getters: {
    
      }, 
  
    mutations: {
     
    },
    actions: {
        updateTrip({commit }){

        }

}
}