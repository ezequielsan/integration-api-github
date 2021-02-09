const form = document.querySelector('#form')
async function getUserGithub(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`); // faz requisição a API
    const { login, avatar_url } =  await response.json(); //transforma no formato json
    
    document.querySelector('h2').innerHTML = login // inseri no h2 do HTML
    document.querySelector('img').src = avatar_url // inseri na img do HTML
   
}
 
form.addEventListener('submit', event => {

    event.preventDefault()
    
    const nome = document.querySelector('#userName').value
    console.log(nome)

    getUserGithub(nome)
})
