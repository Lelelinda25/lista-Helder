class Pagamento{
    valor;
    toString(){
        return "Pagamento";
    }
}
class CartaoCredito extends Pagamento{
    toString(){
        return "Cartão de Crédito";
    }
}
class Boleto extends Pagamento{
    toString(){
        return "Boleto";
    }
}
class Pix extends Pagamento{
    toString(){
        return "Pix";
    }
}

function processarTodos(pagamento){
    console.log(pagamento.toString());
}