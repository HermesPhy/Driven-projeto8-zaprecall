import { useState } from "react";
import Incorreta from "../../../Images/failedImage.png";
import Duvida from "../../../Images/doubtImage.png";
import Correta from "../../../Images/correctImage.png";
import { AbrirQuestao } from "./AbrirQuestoes";
import { FecharQuestao } from "./FecharQuestoes";
import { MarcarRespostaErrada, MarcarRespostaDuvida, MarcarRespostaCorreta } from "./MarcarResposta";

export const Carta = ({ number, question, correctAnswer, callback }) => {
    const [fazerPergunta, setFazerPergunta] = useState(false)
    const [resposta, setResposta] = useState('')

    function caso(color, status) {
        setResposta(color)
        callback(status)
    }

    if (resposta === 'vermelho') { return <MarcarRespostaErrada number={number} /> }
    if (resposta === 'amarelo') { return <MarcarRespostaDuvida number={number} /> }
    if (resposta === 'verde') { return <MarcarRespostaCorreta number={number} /> }

    if (!fazerPergunta) {
        return (<FecharQuestao number={number} caso={() => { setFazerPergunta(true) }} />)
    }
    return (
        <AbrirQuestao
            question={question}
            correctAnswer={correctAnswer}
            caso1={() => { caso('vermelho', Incorreta) }}
            caso2={() => { caso('amarelo', Duvida) }}
            caso3={() => { caso('verde', Correta) }}
        />
    )
}