// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//seleccion
const añadir = document.querySelector('#anadir-amigo'),
  innput = document.querySelector('#amigo'),
  lista = document.querySelector('#listaAmigos'),
  sortear = document.querySelector('#sortear-amigo'),
  resultado = document.querySelector('#resultado')



let amigos = []

//LISTENER

añadir.addEventListener('click', () => {
  const agrega = innput.value.trim()
  if (agrega.length === 0) {
    return alert("Por favor, inserte un nombre.")
  }
  lista.innerHTML += ` <li> ${agrega} </li> `
  amigos.push(agrega)
  innput.value = ''
  resultado.innerHTML = ''


})

sortear.addEventListener('click', () => {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear")
    return resultado.innerHTML = ''
  }
  const indice = Math.floor(Math.random() * amigos.length);
  resultado.innerHTML = `El amigo secreto sorteado es :<li>${amigos[indice]}</li>`
  lista.innerHTML = ''

})

