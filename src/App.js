import {useState} from "react";
import {EstiloCorpo} from "./style";
import {TelaInicial} from "./Componentes/TelaInicial";
import {TelaFlashcards} from "./Componentes/TelaFlashcards";
import {Questoes} from "./Componentes/Questoes"

export const App = () => {
    const [perguntas, setPerguntas] = useState(false)
    const [carta, setCarta] = useState('')
    const [opcao, setOpcao] = useState('astronomia')

    function IniciarPerguntas() {
        if ((carta >= 1 && carta <= Questoes(opcao).length) || carta === '') {
            return setPerguntas(true)
        }
        alert('Insira número válido de cartas')
    }

    return (
        <>
            <EstiloCorpo />
            {!perguntas && <TelaInicial
                IniciarPerguntas={IniciarPerguntas}
                carta={carta}
                callbackCarta={(e) => setCarta(e.target.value)}
                opcao={opcao}
                callbackOpcao={(e) => setOpcao(e.target.value)}
            />}
            {perguntas && <TelaFlashcards
                restart={() => setPerguntas(false)}
                carta={carta}
                cartas={Questoes(opcao)}
            />}
        </>
    )
}