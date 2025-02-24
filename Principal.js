import FuncoesES from "./EntradaSaida.js";
import Evento from "./Evento.js";
import Usuario from "./Usuario.js";

const usuario1 = new Usuario('João', 'joao@email.com', 'senha123');
const usuario2 = new Usuario('Paulo', 'paulo@email.com', 'senha456');
const usuario3 = new Usuario('Rafael', 'rafael@email.com', 'rafa123456');

const evento1 = new Evento(
    ' Vitoria Rock ',
    ' 02/03/2025 ',
    ' 19:30 ',
    ' Av. Nações Unidas 10-10',
    ' O evento é a 10ª edição do festival, que vai contar com os artistas x, y, z. ',
    ' R$ 10,00 ',
    ' Rock'
);

const evento2 = new Evento(
    ' Semana do Hip Hop ',
    ' 14/03/2025 ',
    ' 12:00 ',
    ' Av. Duque de Caxias 24-12',
    ' O principal objetivo da Semana é promover a cultura hip-hop e criar oportunidades para que jovens artistas mostrem seus trabalhos. O evento integra diversas vertentes do movimento, como Breaking, Graffiti, Rap, DJ e Conhecimento, com a proposta de fomentar a inclusão social e a diversidade cultural. ',
    ' R$ 5,00 reais ',
    ' HIP HOP'
);

const evento3 = new Evento(
    ' Samba 90 Graus ',
    ' 29/03/2025 ',
    ' 22:00 ',
    ' GARDEN EVENTOS - Bauru, SP',
    ' O evento contém os setores de pista, bistro e camarote com OpenBar. As atrações são: Marcio Arte, Netinho de Paula e Chrigor  ',
    ' Pista R$ 50,00 reais, Bistro R$ 85,00 reais, Camarote R$ 120,00 reais ',
    ' Samba'
);

const ES = new FuncoesES(usuario1, usuario2, usuario3, evento1, evento2, evento3);


console.log("Lista de eventos disponíveis:");
console.log("                             ");
console.log("1 - " + evento1.compartilhar());
console.log("                             ");
console.log("2 - " + evento2.compartilhar());
console.log("                             ");
console.log("3 - " + evento3.compartilhar());
console.log("                             ");
console.log("Para escolher o evento que deseja ir, faça seu login: ");
console.log("                             ");

ES.verificarLogin();
