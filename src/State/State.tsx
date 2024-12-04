import { createGlobalState } from "react-hooks-global-state";

const { useGlobalState} = createGlobalState({
    DarkMode: false,
    isLogin: false,
    userId: '',
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
    isFavouriteBlog: false,
    isReplying: false,
    courseCommentId: "",
    blogCommentId: "",
    isTwoStep: false,
    userGmail: '',
    userPass: '',
    sthChangedStu: false,
})


export {useGlobalState}