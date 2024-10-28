import { createGlobalState } from "react-hooks-global-state";

const { useGlobalState} = createGlobalState({
    DarkMode: false,
    isLogin: false,
    phoneNumber: ""
})


export {useGlobalState}