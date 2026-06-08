class Midia{
    toString() {
        return "Mídia";
    }
}

class Livro extends Midia{
    toString() {
        return "Livro";
    }
}
class Filme extends Midia {
    toString() {
        return "Filme";
    }
}
class Musica extends Midia {
    toString() {
        return "Música";
    }
}

const Livros = []
const Filmes = []
const Musicas = []

Livros.push(new Livro())
Filmes.push(new Filme())
Musicas.push(new Musica())