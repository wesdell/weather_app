const fs = require('fs')

require('dotenv').config()
require('colors')
const axios = require('axios')

const ENDPOINT = `${process.env.API_URL}?KEY=${process.env.API_TOKEN}`

class Search {
  constructor () {
    this.history = []
    this.path = './db/data.json'
    this.readDataDB()
  }

  async searchCity (city) {
    try {
      const instance = axios.create({
        baseURL: ENDPOINT,
        params: {
          q: city,
          aqi: 'no'
        }
      })
      const { data } = await instance.get()
      return data
    } catch (err) {
      return err
    }
  }

  manageHistory (place) {
    this.history.unshift(place)
    const newHistory = [...new Set(this.history)]
    this.history = newHistory
    this.history = this.history.splice(0, 5)
    this.saveDataDB()
  }

  saveDataDB () {
    const payload = {
      history: this.history
    }
    fs.writeFileSync(this.path, JSON.stringify(payload))
  }

  readDataDB () {
    if (!fs.existsSync(this.path)) return null

    const info = fs.readFileSync(this.path, { encoding: 'utf-8' })
    const data = JSON.parse(info)
    this.history = data.history
  }

  showCityData (data) {
    console.clear()
    console.log('--------------------------------\n'.gray)
    console.log('Information of city weather\n'.green)
    console.log(`City: ${data.location.name}`)
    console.log(`Country: ${data.location.country}`)
    console.log(`Time: ${data.location.localtime}`)
    console.log(`Latitude: ${data.location.lat}`)
    console.log(`Longitude: ${data.location.lon}`)
    console.log(`Temperature: ${(data.current.temp_f).toString().green} ${'°C'.green}`)
    console.log(`Condition: ${data.current.condition.text.green}`)
    console.log('\n--------------------------------'.gray)
  }
}

module.exports = Search
