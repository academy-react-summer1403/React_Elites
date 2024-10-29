import { createGlobalState } from "react-hooks-global-state";

const { useGlobalState} = createGlobalState({
    DarkMode: false,
    isLogin: false,
    phoneNumber: "",
    userInfoObj: {},
    isLanding: false,
    isCourse: false,
    isBlog: false,
    isAboutUs: false
})


export {useGlobalState}