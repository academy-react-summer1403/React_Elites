import { useGlobalState } from "../../../State/State";



export const identifier = (className) => {


    // اضافه کردن تم ها
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    // اگر این تم روشن شود
    
    if(darkMode == true){
        return className
    }
}