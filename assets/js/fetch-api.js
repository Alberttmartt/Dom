

///fetch peticionws hhtp
let button= document.querySelector('#button');
button.addEventListener('click', ()=> {
    let apiFetch =fetch(' https://api.thecatapi.com/v1/images/search');
    apiFetch ///crear una promesa fetch ase la peticion ///
    .then(resp => resp.json()) ///// recibiendo la respuest que debo obtener
    .then(data => {            /////ya tuvo la respueta 
        let cat = document.querySelector('#cat'); ///ayuda a insertar imagen en el contenedor html 
       cat.src=data[0].url;
        
       console.log(data[0].url);       //////ya obtuvo el dato
    }).catch(e => console.log(e))
})