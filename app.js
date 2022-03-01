function eleccion(dulces) {
    // arreglo de gomitas
    switch (dulces) {
        case "1":
            return "Para gomitas te recomiendo: Panditas, Sours, Pokemón";
            break;
        case "2":
            return "Para Dulces picantes te recomiendo: Wonka, Sours, Extreme";
            break;
        case "3":
            return "Para chocolates te recomiendo: Milky Way, Kit-kat, Hersheys";
            break;
        default:
            return 0;
            break;
    }
}
    
alert("¿No sabes que dulce elegir?\n¡Yo te puedo recomendar algunos!");
let entrada = prompt("¿Quieres que te ayude?\n 1) Si\n 2) No")
console.log(entrada);
// let entrada = prompt("¿No sabes que dulce elegir?¡Yo te puedo recomendar algunos!");
while (entrada == 1 ) {
    if (entrada == 1) {
        let resultado = eleccion(prompt("Escribe el número del tipo de dulce te gusta más\n 1)Gomitas\n 2) Dulces picantes\n 3) Chocolates"));
        alert(resultado);
    }
    entrada = prompt ("¿Te ayudo otras recomendaciones?\n 1) Si\n 2) No");
}
alert("¡Diviertete comprando dulces!");