import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { LastPassword } from "./lastPassword";
import { NewPassword } from "./NewPassword";
import { Button } from "./Button";

const LinksHolder = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
    <div className={styleInform.left}>
        <LastPassword />
        <NewPassword />
        <Button />
    </div>

    )
}

export { LinksHolder }