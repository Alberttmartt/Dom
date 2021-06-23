/* 
 function lista (elemento)

 let animales =['perro','Gato', 'pez', 'pajaro','leon', 'jirafa', 'elefante', 'oso', 'Perro', 'Gallina' ];
 let computadoras= ['HP','Lenovo', 'Asus', 'Dell','Mac', 'Toshiba', 'Compaq', 'Gateway', 'Panasonic', 'sony' ];
 let compañeros= ['Clara','Marco', 'Alberto', 'Emmanuel','Luis', 'Felipe', 'Tania', 'Humberto', 'Yanni', 'Ana' ];

//llamar informacion de los animales
 const boton_animales = document.querySelector(".boton")

boton_animales.addEventListener("click", (e)=> {
    if(boton_animales.classList.contains ("anim")){
        
        animales.forEach(function(animales){
            let item= document.createComment('li');
            item.textContent =animales;
            
            lista.appenChild(item);
   
 } );
  
 */
 function lista(tipo) {
    tipo.forEach(function (tipo) {
        let item = document.createElement('li');
        item.textContent = tipo;
        //se crea <li> animal</li>
        list.appendChild(item);
    
    });
}
let button= document.querySelector('#animal');
button.addEventListener('click', event=>{
    var animales =['Lobo','Perro','Gato','Conejo','Aveztruz','Burro'];
    lista(animales);
})
let button2= document.querySelector('#computadoras');
button2.addEventListener('click', event=>{
    var computadoras =['Dell','Sony','HP','GHIA','MAC','Lenovo','Toshiba','Asus'];
    lista(computadoras);
})
let button3= document.querySelector('#compañeros');
button3.addEventListener('click', event=>{
    var companeros =['Clara','Felipe','Luis','Marco','Alberto','Emanuel','Carlos'];
    lista(companeros);
})
