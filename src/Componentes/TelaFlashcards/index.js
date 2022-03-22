import { useState } from "react";
import { EstiloTelaFlashcards } from "./estilo";
import { Carta } from "./Cartas"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const TelaFlashcards = ({ restart, carta, cartas }) => {
    const [done, setDone] = useState(0)
    const [answers, setAnswers] = useState([])

    return (
        <>
            <Header />
            <EstiloTelaFlashcards>
                {cartas.map((carta, i) => {
                    return <Carta {...carta} key={i + 1} number={i + 1}
                        callback={(value) => {
                            setDone(done + 1)
                            setAnswers([...answers, value])
                        }}
                    />
                })
                }
            </EstiloTelaFlashcards>
            <Footer
                done={done} cartas={cartas}
                answers={answers} restart={restart}
                carta={carta}
            />
        </>
    )
}