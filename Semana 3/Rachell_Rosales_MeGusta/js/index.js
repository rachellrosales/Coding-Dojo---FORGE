function aumentarLikes(btn){
    let numeroLike = document.querySelector("#numero"+btn.id[btn.id.length-1])
    numeroLike.innerText++
}