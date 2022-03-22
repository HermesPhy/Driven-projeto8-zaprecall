import { useState } from "react";
import Spin from "../../../../Images/spinImage.png";
import {AbrirQuestoes, Botao} from "./estilo";

export const AbrirQuestao = ({ question, correctAnswer, caso1, caso2, caso3 }) => {
    const [virarQuestao, setVirarQuestao] = useState(false)

    return (
        <AbrirQuestoes>
            {!virarQuestao &&
                <>
                    <span>{question}</span>
                    <img onClick={() => { setVirarQuestao(true) }} src={Spin} alt="virar questao" />
                </>
            }
            {virarQuestao &&
                <>
                    <span>{correctAnswer}</span>
                    <div>
                        <Botao onClick={caso1}>Não lembrei</Botao>
                        <Botao onClick={caso2}>Quase não lembrei</Botao>
                        <Botao onClick={caso3}>Sucesso!</Botao>
                    </div>
                </>
            }
        </AbrirQuestoes>
    )
}