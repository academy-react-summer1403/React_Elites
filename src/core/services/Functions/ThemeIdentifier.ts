import { useGlobalState } from "../../../State/State";



export const identifier = (className, className2, className3, className4, className5, className6,) => {


    // اضافه کردن تم ها
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [darkMode2, setDarkMode2] = useGlobalState('DarkMode2');
    const [greenMode, setGreenMode] = useGlobalState('greenMode');
    const [pinkMode2, setPinkMode2] = useGlobalState('pinkMode');
    const [blueMode, setBlueMode] = useGlobalState('blueMode');
    const [redMode2, setRedMode2] = useGlobalState('redMode');

    // اگر این تم روشن شود

    if (darkMode == true) {
        return className
    }
    else if (darkMode2 == true) {
        return className2
    }
    else if (greenMode == true) {
        return className3
    }
    else if (pinkMode2 == true) {
        return className4
    }
    else if (blueMode == true) {
        return className5
    }
    else if (redMode2 == true) {
        return className6
    }
}