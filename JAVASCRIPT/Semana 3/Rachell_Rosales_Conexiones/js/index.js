let editarPerfil = document.querySelector("#btnEditar")

editarPerfil.addEventListener("click", function(){
    this.closest(".informacion-perfil").querySelector("#nombrePerfil").innerText = "Katherine Iriarte";
});

let cancelarSoli = document.querySelectorAll(".btnRechazar")
console.log(cancelarSoli)

for(let i = 0; i < cancelarSoli.length; i++){
    cancelarSoli[i].addEventListener("click",function(){
        let contadorConexiones = this.closest(".box-der").querySelector(".conexiones span");
        let numeroConexiones = Number(contadorConexiones.innerText);
        numeroConexiones++;
        contadorConexiones.innerText = numeroConexiones;

        let contadorSolicitudes = this.closest(".solicitudes").querySelector("span");
        let numeroSolicitudes = Number(contadorSolicitudes.innerText);
        numeroSolicitudes--;
        contadorSolicitudes.innerText = numeroSolicitudes; 

        this.closest(".solicitud").remove();
    })
}

let aceptarSoli = document.querySelectorAll(".btnAceptar")
console.log(aceptarSoli)

for(let i = 0; i < aceptarSoli.length; i++){
    aceptarSoli[i].addEventListener("click",function(){
        let contadorConexiones = this.closest(".box-der").querySelector(".conexiones span");
        let numeroConexiones = Number(contadorConexiones.innerText);
        numeroConexiones++;
        contadorConexiones.innerText = numeroConexiones;

        let contadorSolicitudes = this.closest(".solicitudes").querySelector("span");
        let numeroSolicitudes = Number(contadorSolicitudes.innerText);
        numeroSolicitudes--;
        contadorSolicitudes.innerText = numeroSolicitudes; 

        this.closest(".solicitud").remove();
    })
}
