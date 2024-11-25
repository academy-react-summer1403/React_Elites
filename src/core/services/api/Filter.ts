import http from '../../interceptor/index.ts'

const Filter = async (teacherId, pageInation, levelId, categoryId, teachCount) => {
    try {
        const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageInation}&RowsOfPage=12&TechCount=${teachCount}&ListTech=${categoryId}&courseLevelId=${levelId}&TeacherId=${teacherId}`);
        return result;
    } catch (error) {
        return error;
    }
};

export {Filter};