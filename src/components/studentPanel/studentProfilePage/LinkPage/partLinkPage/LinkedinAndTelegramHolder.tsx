import styleInform from "./../../InformationPage/partInformation/Information.module.css";

import { Telegram } from "./telegram";
import { Linkedin } from "./linkedin";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const LinksHolder = () => {
  

    return (
    <div className={styleInform.left}>
        <Linkedin />
        <Telegram />
    </div>

    )
}

export { LinksHolder }