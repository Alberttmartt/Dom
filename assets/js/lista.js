const listAnimals=['Pez','Jaguar', 'Lobo', 'Iguana', 'Pegelagarto','Ardilla','Canguro','Tlacuache', 'Ajolote','Perro'];
const listComputer=['Asus','Hp', 'Toshiba', 'Dell', 'Mac','Acer','Lenovo','Huawei', 'Alienware','Compac'];
const listPeople=['carlos', 'eduardo', 'edgar rodrigo', 'pedro angel', 'cesar eduardo',' luis', 'clara itzel',];


const btnAnimals = document.querySelector('#animals');
const btnComputers = document.querySelector('#computers');
const btnPeople = document.querySelector('#people');
const list = document.querySelector('#list');

function displayList(lists) {
    list.textContent = ``;
    lists.forEach(l => {
       const item = document.createElement('li');
       item.textContent = l;
       list.appendChild(item);
    });
}

    btnAnimals.addEventListener(`click`, () => {
    displayList(listAnimals);
});

    btnComputers.addEventListener(`click`, () => {
    displayList(listComputers);
});

    btnPeople.addEventListener(`click`, () => {
    displayList(listPeople);
});

//////se acorto el codigo////
    /* listAnimals.forEach(animal => {
    const li = document.createElement('li');
    //<li></li>//
    li.textContent =animal;
    li.classList.add('mi-clase')
    ///<li>animal>///
    list.appendChild(li);
    }); */
     
/* });   */
///funcion computadoras boton//
   /*  btnanimals.addEventListener('click', function(){
        listAnimals.forEach(computer => {
        const li = document.createElement('li');
        //<li></li>//
        li.textContent =computer;
        li.classList.add('mi-clase')
        ///<li>animal>///
        list.appendChild(li);
    });
}); */
//////////funcio de nombres clic al boton//
        /* btnanimals.addEventListener('click', function(){
            listAnimals.forEach(persons => {
            const li = document.createElement('li');
            //<li></li>//
            li.textContent =persons;
            li.classList.add('mi-clase')
            ///<li>animal>///
            list.appendChild(li);
        });
    }); */













/* const listAnimals=['Pez','Jaguar', 'Lobo', 'Iguana', 'Pegelagarto','Ardilla','Canguro','Tlacuache', 'Ajolote','Perro'];
const listComputer=['Asus','Hp', 'Toshiba', 'Dell', 'Mac','Acer','Lenovo','Huawei', 'Alienware','Compac'];
const listPeople=[carlos eduardo, edgar rodrigo, pedro angel, cesar eduardo, luis, clara itzel,] */

