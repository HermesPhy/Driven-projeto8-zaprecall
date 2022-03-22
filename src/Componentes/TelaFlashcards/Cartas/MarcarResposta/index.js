import Incorreta from "../../../../Images/failedImage.png";
import Duvida from "../../../../Images/doubtImage.png";
import Correta from "../../../../Images/correctImage.png";
import { FecharQuestoes } from "../FecharQuestoes/estilo";
import { TracoVermelho, TracoAmarelo, TracoVerde } from "./estilo";

export const MarcarRespostaErrada = ({ number }) => {
    return (
        <FecharQuestoes>
            <TracoVermelho>Pergunta {number}</TracoVermelho>
            <img src={Incorreta} alt="Incorreta" />
        </FecharQuestoes>
    )
}

export const MarcarRespostaDuvida = ({ number }) => {
    return (
        <FecharQuestoes>
            <TracoAmarelo>Pergunta {number}</TracoAmarelo>
            <img src={Duvida} alt="Dúvida" />
        </FecharQuestoes>
    )
}

export const MarcarRespostaCorreta = ({ number }) => {
    return (
        <FecharQuestoes>
            <TracoVerde>Pergunta {number}</TracoVerde>
            <img src={Correta} alt="Correta" />
        </FecharQuestoes>
    )
}