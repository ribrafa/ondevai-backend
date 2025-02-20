import Evento from "./Evento.js";
 
export default class Preferencias extends Evento {
    constructor(nome, data, hora, localizacao, descricao, preco, genero){
        super(nome, data, hora, localizacao, descricao, preco, genero);
    }
 
    participar () {
        return 'Você vai participar do ' + this.nome;
    }
}