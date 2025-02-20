export default class Evento {
    constructor(nome, data, hora, localizacao, descricao, preco, genero){
        this.nome = nome;
        this.data = data;
        this.hora = hora;
        this.localizacao = localizacao;
        this.descricao = descricao;
        this.preco = preco;
        this.genero = genero
    }
   
    compartilhar() {
        return 'O evento' + this.nome +
        'ocorrerá na data' + this.data +
        'às' + this.hora +
        'na' + this.localizacao +
        '.' + this.descricao +
        'O valor é de' + this.preco +
        'com genero' + this.genero;
    }
}

