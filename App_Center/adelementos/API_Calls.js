var sha1 = require("sha1");

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
  }).then((data) => data.json());
}

export function makeRegistration(
  username,
  email,
  password,
  registar,
  setoratividade,
  areainteresse
) {
  console.log(username);
  console.log(email);
  console.log(password);
  console.log(registar);
  console.log(setoratividade);
  console.log(areainteresse);
  return fetch("http://deca-centerweb.ua.pt/registar", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: sha1(password),
      registar: registar,
      setoratividade: setoratividade,
      areainteresse: areainteresse,
    }),
  }).then((data) => data.json());
}

export function criarnovoevento(designacao, descricao, local, datatime ) {
  return fetch("http://deca-centerweb.ua.pt/criarEvento", {
    method: "POST",
    headers: {
      Accept: "aplication/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      designacao: designacao,
      descricao: descricao,
      local: local,
      datatime: datatime,
    }),
  }).then((data) => data.json());
}


export function destaquesevento() {
  return fetch("http://deca-centerweb.ua.pt/destaques", {
    method: "GET",
    headers: {
      Accept: "aplication/json",
    },
  }).then((data) => data.json());
}