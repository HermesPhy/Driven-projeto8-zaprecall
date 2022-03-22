import { Mensagem } from "./estilo"

export const MensagemFinal = ({ done, cartas, answers, src, title, msg, restart }) => {
    return (
        <Mensagem>
            <div>
                <img src={src} alt={src} />
                <h3>{title}</h3>
            </div>
            <span>{msg}</span>
            <div className="block">
                <span>{done}/{cartas.length} CONCLUÍDOS</span>
                <div>
                    {answers.map((el, i) => <img key={i + 1} src={el} alt={el} />)}
                </div>
            </div>
            <button onClick={restart}>
                <span>REINICIAR PERGUNTAS</span>
            </button>
        </Mensagem>
    )
}
