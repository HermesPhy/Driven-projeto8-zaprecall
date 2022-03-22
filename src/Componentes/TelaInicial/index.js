import logo from "../../Images/LogoZapRecall.png";
import { CartaInicial } from "./estilo"

export const TelaInicial = ({ IniciarPerguntas, carta, callbackCarta, opcao, callbackOpcao }) => {

    return (
        <CartaInicial>
            <img src={logo} alt="Logo ZapRecall" />
            <h1>ZapRecall</h1>
            <select onChange={callbackOpcao} value={opcao} >
                <option value='astronomia'>Astronomia</option>
                <option value='historiaBrasil'>História do Brasil</option>
            </select>
            <input
                type='number' placeholder='Digite sua meta de cartas...' min='1'
                value={carta} onChange={callbackCarta}
            />
            <button onClick={IniciarPerguntas}>
                <span>Iniciar Perguntas!</span>
            </button>
        </CartaInicial>
    )
}