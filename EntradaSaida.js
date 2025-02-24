import promptSync from 'prompt-sync';
const prompt = promptSync();

export default class FuncoesES {
    constructor(usuario1, usuario2, usuario3, evento1, evento2, evento3) {
        this.usuario1 = usuario1;
        this.usuario2 = usuario2;
        this.usuario3 = usuario3;
        this.evento1 = evento1;
        this.evento2 = evento2;
        this.evento3 = evento3;
    }

    verificarLogin() {
        let email = prompt("Digite seu email: ");
        let senha = prompt("Digite sua senha: ");

        if (this.usuario1.fazerLogin(email, senha)) {
            console.log("Bem-vindo, " + this.usuario1.nome);
            this.escolhaEvento();
            return;
        } else if (this.usuario2.fazerLogin(email, senha)) {
            console.log("Bem-vindo, " + this.usuario2.nome);
            this.escolhaEvento();
            return;
        } else if (this.usuario3.fazerLogin(email, senha)) {
            console.log("Bem-vindo, " + this.usuario3.nome);
            this.escolhaEvento();
            return;
        } else {
            console.log("Acesso negado. Tente novamente.");
            this.verificarLogin();
        }
    }

    escolhaEvento() {
        let opcaoValida = false;

        while (!opcaoValida) {
            console.log("                                     ");
            console.log("Evento Vitoria Rock      [1]");
            console.log("Evento Semana do Hip Hop [2]");
            console.log("Evento Samba 90 Graus    [3]");

            let escolha = prompt("Digite a opção de evento que deseja participar: ");

            if (escolha === '1') {
                console.log("Você escolheu o Evento Vitoria Rock");
                opcaoValida = true;

            } else if (escolha === '2') {
                console.log("Você escolheu o Evento Semana do Hip Hop");
                opcaoValida = true;

            } else if (escolha === '3') {
                console.log("Você escolheu o Evento Samba 90 Graus");
                opcaoValida = true;

            } else {
                console.log("Opção inválida. Tente novamente.");
            }
        }
    }
}
