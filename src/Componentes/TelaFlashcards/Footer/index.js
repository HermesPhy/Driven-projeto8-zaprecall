import Incorreta from "../../../Images/failedImage.png";
//import Duvida from "../../../Images/doubtImage.png";
import Correta from "../../../Images/correctImage.png";
import SoAlegria from "../../../Images/partyIcon.png";
import DeuRuim from "../../../Images/sadIcon.png";
import { EstiloFooter } from "./estilo"
import { MensagemFinal } from "./Finalizar";

export const Footer = ({ done, cartas, answers, restart, carta }) => {
    const propsQuaseLa = {
        src: DeuRuim,
        title: 'PUTZ...',
        msg: 'Ainda faltaram alguns... Mas não desanime!',
        done: done,
        cartas: cartas,
        answers: answers,
        restart: restart
    }
    const propsSuccesso = {
        src: SoAlegria,
        title: 'Parabéns!',
        msg: 'Você não esqueceu de nenhum flashcard!',
        done: done,
        cartas: cartas,
        answers: answers,
        restart: restart
    }

    if (done !== cartas.length) {
        return (
            <EstiloFooter >
                <span>{done}/{cartas.length} CONCLUÍDOS</span>
                <div>
                    {answers.map((el, i) => <img key={i + 1} src={el} alt={el} />)}
                </div>
            </EstiloFooter>
        )
    }
    if ((carta === '' && answers.includes(Incorreta)) ||
        (answers.filter(el => el === Correta)).length < carta) {
        return (
            <EstiloFooter >
                <MensagemFinal {...propsQuaseLa} />
            </EstiloFooter>
        )
    }
    return (
        <EstiloFooter >
            <MensagemFinal {...propsSuccesso} />
        </EstiloFooter>
    )
}