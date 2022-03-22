import Play from "../../../../Images/playImage.png";
import { FecharQuestoes } from "./estilo";

export const FecharQuestao = ({ number, caso }) => {
    return (
        <FecharQuestoes>
            <span>Pergunta {number}</span>
            <img onClick={caso} src={Play} alt="iniciar pergunta" />
        </FecharQuestoes>
    )
}