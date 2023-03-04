const { inquirerPauseMenu, inquirerMenu, inquirerReadInputMenu, inquirerReadCity } = require('./helpers/inquirer')
const Search = require('./models/Search')

const EXIT_PROGRAM = 0

const main = async () => {
  let opt
  const search = new Search()

  do {
    console.clear()
    // Shows menu with all options
    opt = await inquirerMenu()

    switch (opt) {
      case 0:
        console.clear()
        break
      case 1: {
        console.clear()
        // Reads user input
        const userInput = await inquirerReadInputMenu()
        // Fetching data with the user input
        const cityData = await search.searchCity(userInput)
        // Stores the data to send to the history
        const place = await inquirerReadCity(cityData)
        // Saves data in database file
        search.manageHistory(place)
        // Shows data
        search.showCityData(cityData)
        break
      }
      case 2: {
        console.clear()
        search.history.forEach((place, index) => {
          console.log(`${(index + 1 + '.').cyan} ${place}`)
        })
        break
      }
    }

    if (opt !== EXIT_PROGRAM) await inquirerPauseMenu()
  } while (opt !== EXIT_PROGRAM)
}

main()
