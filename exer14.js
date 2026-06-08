class Aluno{
    #nota

    get nota(){
    return this.#nota
}
set nota(nota){
    if(nota < 0 || nota > 10){
        console.log("Nota inválida")
    } else {
        this.#nota = nota
    }
}

static calcularMedia(n1, n2){
    return (n1 + n2) / 2    
}
}