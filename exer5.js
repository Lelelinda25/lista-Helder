class Usuario {
    constructor(nome) {
        this.nome = nome;
        #senha = null;
    }
        autenticar(senha) {
            if (senha === this.#senha) {
                return true;
            } else {
                return false;
            }

            
        
    }
     getsenha() {
                return this.#senha ;
            }

            setsenha(novaSenha) {
                this.#senha = novaSenha;
            }

}