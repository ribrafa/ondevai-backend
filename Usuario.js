import prompt from 'prompt-sync';

export default class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    fazerLogin(email, senha) {
        if (email === this.email && senha === this.senha) {
            console.log('Login efetuado com sucesso');
            return true;
        } else {
            console.log('Login inválido');
            return false;
        }
    }
}

