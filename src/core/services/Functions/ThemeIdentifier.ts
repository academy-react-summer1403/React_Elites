import { useGlobalState } from "../../../State/State";



export const identifier = (className,className2) => {


    // اضافه کردن تم ها
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [darkMode2, setDarkMode2] = useGlobalState('DarkMode2');

    // اگر این تم روشن شود
    
    if(darkMode == true){
        return className
    }
    else if(darkMode2 == true){
        return className2
    }
}