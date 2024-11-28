import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { Telegram } from "./telegram";
import { Linkedin } from "./linkedin";

const LinksHolder = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
    <div className={styleInform.left}>
        <Linkedin />
        <Telegram />
    </div>

    )
}

export { LinksHolder }