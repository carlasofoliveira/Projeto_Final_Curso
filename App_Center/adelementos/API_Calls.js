var sha1 = require('sha1');



export function isLoggedIn(email, passWord) {
    return fetch("http://deca-centerweb.ua.pt/login/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: sha1(passWord),
        }),
      })
      .then(data => data.json())
   }

export function makeRegistration(username, email, password){
  return fetch ("http://deca-centerweb.ua.pt/registar", {
    method: "POST",
    headers:{
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: sha1(password),
    }),
  })
  .then(data => data.json())
}
