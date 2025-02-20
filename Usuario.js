import prompt from 'prompt-sync'


export default class Usuario {
    constructor(nome,email,senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    fazerLogin(email,senha){
        if(email == this.email){
            if(senha == this.senha){
                return 'Login efetuado com sucesso'
            }else{
                return 'Login Invalido.'
            }       
        }
    }

}

