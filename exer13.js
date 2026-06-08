class Endereço{
    constructor(rua, numero, cidade){
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }
}
class Contato{
    constructor( email, telefone){
        this.email = email;
        this.telefone = telefone;
    }
}
class PerfilUsuario{
    constructor(nome, endereço, contato){
        this.nome = nome;
        this.endereço = endereço;
        this.contato = contato;
    }  
    exibirPerfil(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Endereço: ${this.endereço.rua}, ${this.endereço.numero}, ${this.endereço.cidade}`);
        console.log(`Contato: Email - ${this.contato.email}, Telefone - ${this.contato.telefone}`);
    }     
}
