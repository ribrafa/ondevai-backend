import promptSync from 'prompt-sync';
const prompt = promptSync();

export default class FuncoesES {
    constructor() {      
    }
    
    primeiroEvento(evento) {
        console.log("Lista de Eventos: ")
        console.log("                        ");
        console.log(evento.compartilhar());
        console.log("                        ");
    }

    segundoEvento(evento) {
        console.log("************************");
        console.log("                        ");
        console.log(evento.compartilhar());
        console.log("                        ");
    }

    terceiroEvento(evento) {
        console.log("************************");
        console.log("                        ");
        console.log(evento.compartilhar());
        console.log("                        ");
        console.log("************************");
    }

    escolhaEvento() {

        let opcaoValida = false;
        let escolha;

        while (!opcaoValida) {
            console.log("                                     ")
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
