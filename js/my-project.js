let entrar="";
let cartera= 0;

function registro(){
  entrar=prompt("Desea ingresar al sitio? Responda por si o no.")
}

function impuesto(){
  x= precio*0.74;
  total = precio+x
  alert("El precio final es de: $" +total);
  if(cartera < total){
    alert("No dispones del dinero suficiente para comprar el juego")
  }
  else if(cartera > total){
    alert("Te alcanza para comprar el juego");
  }
}
function resta(){
  resta= cartera - total
  alert("En tu cartera quedan $" +resta);
  if(resta < 100){
    alert("Ya no puedes seguir calculando precios");
  }
  else if(resta > 100){
    alert("Puedes seguir calculando precios");
  }
}


registro();
if(entrar == "si"){
  alert("Bienvenido a la pagina");
}
else if(entrar == "no"){
  alert("Hasta la proximaaa");
}
else{
  alert("Debes responder por si o por no");
}

while(entrar == "si"){
  cartera = parseFloat(prompt("Debes ingresar el dinero de tu cartera de steam"));
  if(cartera < 100){
    alert("No dispones de dinero suficiente en tu cartera");
    break
  }
  else{
    alert("Usted tiene $" +cartera+ " en su cartera de steam, puede proseguir.")
    menu=prompt("Bienvenido al calculador de impuestos de steam \n Que desea hacer?\n\n 1_Calcular impuesto\n\n 2_Salir");
  }if(menu == 1){
    alert("Ahora vamos a calcular el impuesto al juego que queres");
    precio = parseFloat(prompt("Ingresa el precio del juego"));
    impuesto();
    resta();
  }

  else if(menu == 2){
    alert("Nos vemos");
    break;
  }

}