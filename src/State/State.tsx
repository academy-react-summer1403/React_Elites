import { createGlobalState } from "react-hooks-global-state";

const { useGlobalState} = createGlobalState({
    DarkMode: false,
    isLogin: false,
    phoneNumber: "",
    userInfoObj: {},
    isLanding: false,
    isCourse: false,
    isBlog: false,
    isAboutUs: false,
    isGrid: true,
    courseLike: "0",
    courseDisLike: "0",
    isReserved: "0",
    isFavoriteCourse: false,
})


export {useGlobalState}