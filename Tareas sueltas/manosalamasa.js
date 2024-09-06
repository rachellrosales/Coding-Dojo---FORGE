function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas){
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

var p1 = pizzaOven("estilo Chicago", "tradicional", ["mozarella"], ["pepperoni", "salchicha"]);
console.log(p1);

var p2 = pizzaOven("lanzada a mano", "marinara", ["mozarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(p2);
