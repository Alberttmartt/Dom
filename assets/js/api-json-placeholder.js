let btnUsers= document.querySelector('#btnUser');
let divUser =document.querySelector('#divUsers');

btnUsers.addEventListener('click', displayData);
   /*  let getUsers= fetch('https://jsonplaceholder.typicode.com/users'); */


 /* btnUsers.addEventListener('click', () => {
    let getUsers= fetch('https://jsonplaceholder.typicode.com/users'); */

    
  /*  getUsers
        .then(resp => resp.json ())
        .then(data => {
            data.forEach(user => {
                let parr = document.createElement('p');////crear parrafo donde vaya a dentro mi informacion/////
                parr.textContent =user.name;           //colocando ///
                divUser.appendChild(parr);             ////mostrar nombre de los usuarios//
            });
       }).catch(e => console.log(e));
       /* console.log(data); 
}) 
 */
   async function displayData() { //se agrega async para ser asincrona
    let getUsers= await fetch("https://jsonplaceholder.typicode.com/users"); //se agrega await si no es sincrona "hace peticion"
    console.log(getUsers.ok);

    let data= await getUsers.json();  ///guardar la respuesta "los datos de la peticion"
    data.forEach(user => {
        let parr = document.createElement("p");
     /* parr.textContent =user.name; */
     parr.textContent = `Nombre de usuario: ${user.name}. Email: ${user.email}. ciudad: ${user.address.city}`;
        divUser.appendChild(parr);
    });
    console.log(data);               ///imprimiendo la informacion en consola obtiene datos
}
   /*  return data; */



    /* console.log(displayData()); *///puedo llamar data por que arriba esta dentro
    /* displayData();  */