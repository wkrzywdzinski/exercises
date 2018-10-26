var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var wojtistory = {
  q: "Welcome to Spiced Academy. Do you want to learn some coding?",
  answers: {
    yes: {
      q:
        "You are alone in a big bright room. You don't know how to use callbacks. You can ask one of two teachers. David or Ryan?",
      answers: {
        Ryan: {
          q:
            "- A callback function is a function that you pass to someone and let them call it at some point of time. Do you understand?",
          answers: {
            yes: "congratulations!",
            no: {
              q:
                "A callback function is a function that you pass to someone. Did you get it?",
              answers: {
                no: {
                  q: "A callback function is a function. Did you get it?",
                  answers: {
                    yes: "congratulations!"
                  }
                },
                yes: "Cool."
              }
            }
          }
        },
        David: "if(callback)^^^^^{////}{callback}{typof!}}. DID YOU GET IT?"
      }
    },
    no: "Ok. I understand."
  }
};
var davidstory = {
  q: "Welcome to The Land Of Wizards! Would you like to play?",
  answers: {
    yes: {
      q:
        "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
      answers: {
        left: {
          q:
            "There's a scary wizard! He asks you a tough question. What's 1+1?",
          answers: {
            "2": "congratulations!"
          }
        },
        right: "This was not the right choice. Goodbye!"
      }
    },
    no: "Alright then. Enjoy your day!"
  }
};
function askquestion(story) {
  rl.question(story.q, function(answer) {
    if (typeof story.answers[answer] == "string") {
      console.log(story.answers[answer]);
      rl.close();
    } else if (story.answers[answer]) {
      askquestion(story.answers[answer]);
    } else {
      console.log("Wrong answer, try again");
      askquestion(story);
    }
  });
}
askquestion(wojtistory);
