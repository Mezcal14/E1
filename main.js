


const pizzas = [
    {
       id: 1,
       nombre: "Muzarella",
       ingredientes: ["Muzarella", "Aceitunas", "Albahaca"],
       precio: 1300
    },
    {
        id: 2,
        nombre: "Roqueford",
        ingredientes: ["Muzarella", "Roqueford", "Aceitunas Negras"],
        precio: 1500 
    },
     {  id: 3,
       nombre: "Doble Queso",
       ingredientes: ["Muzarella", "Mas Muzarella", "Albahaca"],
       precio: 1700
    },
    {   id: 4,
        nombre: "Rucula",
        ingredientes: [ "Rucula", "Parmesano"],
        precio: 350

    },
    {
        id: 5,
        nombre: "4 quesos",
        ingredientes: ["Muzarella", "Roqueford", "Parmesano", "Provolone"],
        precio: 1900
    },
    {
        id: 6,
       nombre: "Jamon y morrones",
       ingredientes: ["Muzarella", "Jamon", "Morrones"],
       precio: 1950
    }

]
   

//ID IMPAR

const impar = pizzas.forEach((pizzas) => {
    if(pizzas.id % 2 !== 0){
        console.log(`La Piza de ${pizzas.nombre} tien ID impar`);
    }
});

//PIZAS DE MENOS DE $600


const menosDeSeicientos = pizzas.forEach((pizzas)=>{
    if(pizzas.precio < 600){
        console.log(`La Pizza de ${pizzas.nombre} vale menos de $600`)
    }
});



//CADA PIZA CON SU PRECIO

const nombrePrecio = pizzas.forEach((pizzas)=>{
    console.log(`La pizza ${pizzas.nombre} vale ${pizzas.precio}`);
});

//INGREDIENTES DE CADA PIZA

const nombreIngredientes = pizzas.forEach((pizzas)=>{
    console.log(`La pizza de ${pizzas.nombre} tiene:  ${pizzas.ingredientes}`);
})



































