import { createGlobalState } from "react-hooks-global-state";

const { useGlobalState} = createGlobalState({DarkMode: false})


export {useGlobalState}