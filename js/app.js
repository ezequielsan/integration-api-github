async function getUserGithub(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`); // faz requisição a API
    const { login, avatar_url } =  await response.json(); //transforma no formato json
    
    
    document.querySelector('h2').innerHTML = login // inseri no h2 do HTML
    document.querySelector('img').src = avatar_url // inseri na img do HTML
   
}
getUserGithub('ezequielsan') // passando um nome de usuario como parâmetro