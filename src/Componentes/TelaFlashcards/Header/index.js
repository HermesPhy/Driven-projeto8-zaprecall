import logo from "../../../Images/LogoZapRecallP.png";
import { EstiloHeader } from "./estilo";

export const Header = () => {
    return (
        <EstiloHeader>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
        </EstiloHeader>
    )
}