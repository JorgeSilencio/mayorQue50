alert ("Bienvenido");
let valor1 = parseInt(prompt ("Ingresa tu primer número"));
let valor2 = parseInt(prompt ("Ingresa tu segundo número"));

if (valor1 <= 50 && valor2 <= 50){
    alert ("tu primer número es menor a 50");
    alert ("tu segundo número es menor a 50");
}
else if (valor1 >= 50 && valor2 >= 50){
    alert ("tu primer número es mayor a 50");
    alert ("tu segundo número es mayor a 50");
}
else if (valor1 <= 50 && valor2 >= 50){
    alert ("tu primer número es menor a 50");
    alert ("tu segundo número es mayor a 50");
}
else if (valor1 >= 50 && valor2 <= 50){
    alert ("tu primer número es mayor a 50");
    alert ("tu segundo número es menor a 50");
}