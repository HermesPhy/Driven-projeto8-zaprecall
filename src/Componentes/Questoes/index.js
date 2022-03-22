export const Questoes = (opcao) => {
    let cartas = []
    if (opcao === 'astronomia') {
        cartas = [
            { question: 'Principais defensores do modelo Heliocêntrico.', correctAnswer: 'Nicolau Copérnico e Galileu Galilei' },
            { question: 'Satélites de Júpiter descobertos por Galileu.', correctAnswer: 'Io, Calixto, Ganimedes e Europa' },
            { question: 'Revolucionou o estudo da mecânica celeste', correctAnswer: 'Johannes Kepler' },
            { question: 'Principal contribuição de Isaac Newton para a Astronomia', correctAnswer: 'Lei da Gravitação Universal' },
            { question: 'Bases matemáticas da mecânica newtoniana', correctAnswer: 'Geometria Euclidiana e Cálculo' },
            { question: 'Principal contribuição de Albert Einstein para a Astronomia', correctAnswer: 'Relatividade Geral' },
            { question: 'Estrutura do universo segundo a Relatividade Geral', correctAnswer: 'Tecido espaço-tempo' },
            { question: 'Físico que popularizou a divulgação científica', correctAnswer: 'Carl Sagan' }
        ]
    } if (opcao === 'historiaBrasil') {
        cartas = [
            { question: 'Guerra entre Paulistas e Portugueses pelo ouro das Gerais', correctAnswer: 'Guerra dos Emboabas' },
            { question: 'Qual era o nome de Ouro Preto no auge do ciclo do ouro?', correctAnswer: 'Vila Rica' },
            { question: 'Qual o nome do movimento de 1870 contra a Monarquia?', correctAnswer: 'Manifesto Republicano' },
            { question: 'Qual o nome do 1º golpe militar ocorrido no Brasil?', correctAnswer: 'Proclamação da República' },
            { question: 'Em 21 de abril se comemora qual fato histórico?', correctAnswer: 'Assassinato de Tiradentes' },
            { question: 'Em 1500 ocorreu qual fato da história brasileira?', correctAnswer: 'Invasão dos navegadores portugueses' },
            { question: 'Antônio Conselheiro foi o líder de qual comunidade?', correctAnswer: 'Canudos' },
            { question: 'O que foram as Missões?', correctAnswer: 'Comunidades jesuítas para a conversão religiosa dos índios ' }
        ]
    }
    cartas.sort(() => Math.random() - 0.5)
    return cartas
}