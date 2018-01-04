
//Search Input
//Init(instaniate) Github
const github = new Github;
//Init UI
const ui = new UI;

const searchUser = document.getElementById('searchUser');

//Search input event lister
searchUser.addEventListener('keyup', (e) => {
  //Getinput text
  const userText = e.target.value;
  if(userText !== ''){
    //Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //show alert
      }
      else {
        //show profile
          ui.showProfile(data.profile);
      }
    })
  } else{
    //clear profile

  }
});




















//Object Literals

// const person = {
//   firstName: 'Bernard',
//   lastName: 'Edwards',
//   age: 38,
//   email:'bedwardsjr300@gmail.com',
//   hobbies:['Music', 'Sports'],
//   address: {
//     city: 'Charlotte',
//     state: 'NC',
//   },
//   getBirthYear: function(){
//     return 2017 - this.age;
//   }
// }

// val = person;
// val = person.getBirthYear();

// console.log(val);