// el evento se dispara cuando el documento esta cargando
 window.onload =function (){
   /* console.log(window);*/
 }
    let nameInput = document.querySelector('#nameInput'); 

    /* nameInput.addEventListener('change', function () {
    console.log(nameInput.value);
    });
     */
    nameInput.addEventListener('keydown', function () {
        console.log(nameInput.value);
       /*  console.log(event.target.value); */
        });
    
        let button=document.querySelector('#button')
            button.addEventListener('click', event=>{
             let nameHeader = document.querySelector('#nameH');
             nameHeader.textContent= nameInput.value;
})


/*  
function cambiarNombre () {
    let nameHeader = document.querySelector('#nameH');
        nameHeader.textContent= nameInput.value;

}) */
/* console.log(nameInput.value); */
/* nameInput.addEventListener('change', function (event) {
    console.log(parseInt.nameInput.value);
}); */