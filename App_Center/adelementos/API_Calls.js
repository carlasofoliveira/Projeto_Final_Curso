
export function isLoggedIn(userName, passWord) {
    return fetch("http://deca-centerweb.ua.pt/login/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: passWord,
        }),
      })
      .then(data => data.json())
   }