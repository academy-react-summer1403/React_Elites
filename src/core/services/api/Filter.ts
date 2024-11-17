import http from '../../interceptor/index.ts'

const Filter = async (teacherId, pageInation, levelId, categoryId, teachCount) => {
    try {
        const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageInation}&RowsOfPage=12&TechCount=${teachCount}&courseLevelId=${levelId}&TeacherId=${teacherId}&ListTech=${String(categoryId)}`);
        return result;
    } catch (error) {
        return [];
    }
};

export {Filter};