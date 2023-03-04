require('colors')
const inquirer = require('inquirer')

const inquirerMenu = async () => {
  const question = [
    {
      type: 'list',
      name: 'option',
      message: 'What do you want to do?',
      choices: [
        {
          value: 0,
          name: `${'0.'.cyan} Exit.`
        },
        {
          value: 1,
          name: `${'1.'.cyan} Search city.`
        },
        {
          value: 2,
          name: `${'2.'.cyan} History.`
        }
      ]
    }
  ]

  console.log('====================='.cyan)
  console.log('  Select one option  '.white)
  console.log('====================='.cyan)

  const { option } = await inquirer.prompt(question)
  return option
}

const inquirerPauseMenu = async () => {
  const question = [
    {
      type: 'input',
      name: 'confirm',
      message: `Press ${'ENTER'.green} to continue`
    }
  ]

  await inquirer.prompt(question)
}

const inquirerReadInputMenu = async () => {
  const question = [
    {
      type: 'input',
      name: 'userCity',
      message: 'City: ',
      validate (value) {
        if (!value) return 'Please enter a valid city.'
        return true
      }
    }
  ]

  const { userCity } = await inquirer.prompt(question)
  return userCity
}

const inquirerReadCity = async (data) => {
  const choices = [
    {
      value: data.location.name,
      name: `${'1.'.cyan} ${data.location.name} - ${data.location.country} - ${data.location.region}`
    }
  ]
  const question = [
    {
      type: 'list',
      name: 'city',
      message: 'Select a city: ',
      choices
    }
  ]
  const { city } = await inquirer.prompt(question)
  return city
}

module.exports = {
  inquirerMenu,
  inquirerPauseMenu,
  inquirerReadInputMenu,
  inquirerReadCity
}
