const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = {
  questions: {
    name:       "What's your name? Nicknames are also acceptable :)",
    activity:   "What's an activity you like doing?",
    listening:  "What do you listen to while doing that?",
    meal:       "Which meal is your favourite (eg: dinner, brunch, etc.)",
    food:       "What's your favourite thing to eat for that meal?",
    sport:      "Which sport is your absolute favourite?",
    superpower: "What is your superpower? In a few words, tell us what you are amazing at!",
  },
  profile: {
  }
}

const person = survey.profile;
rl.question(`${survey.questions.name} `, (answer) => {
  survey.profile.name = answer;
  rl.question(`${survey.questions.activity} `, (answer) => {
    survey.profile.activity = answer;
    rl.question(`${survey.questions.listening} `, (answer) => {
      survey.profile.listening = answer;
      rl.question(`${survey.questions.meal} `, (answer) => {
        survey.profile.meal = answer;
        rl.question(`${survey.questions.food} `, (answer) => {
          survey.profile.food = answer;
          rl.question(`${survey.questions.sport} `, (answer) => {
            survey.profile.sport = answer;
            rl.question(`${survey.questions.superpower} `, (answer) => {
              survey.profile.superpower = answer;
              rl.close();
              console.log(`This is ${person.name}. They like ${person.activity} while listening to ${person.listening}.
They loooove ${person.meal}, especially if there's ${person.food} on the menu.
They are a big fan of ${person.sport}, and their superpower is ${person.superpower}!`)
              console.log(survey.profile)
            })
          })
        })
      })
    })
  })
});