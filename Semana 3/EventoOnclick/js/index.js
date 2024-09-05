let botonSesion = document.querySelector("#btnSesion")

botonSesion.addEventListener("click", function(){
    this.innerText = "Cerrar Sesión";
})

let botonAgregar = document.querySelector("#btnAgregar")

botonAgregar.addEventListener("click", function(){
    this.remove();
})

let botonesMeGusta = document.querySelectorAll(".btn-nav")

for(let i = 0; i < botonesMeGusta.length; i++){
    botonesMeGusta[i].addEventListener("click", function(){
        let h1 = this.closest('.seccion').querySelector('h1').textContent;
        alert("Te gusta " + h1);

        let numero = this.querySelector(".megusta");
        let contador = parseInt(numero.innerText);

        contador ++;
        numero.innerText = contador;
    })
}