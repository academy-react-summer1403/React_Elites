import http from '../../interceptor/index.ts'

const Filter = async (teacherId, pageInation, levelId, categoryId, max, min) => {
    try {
        const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageInation}&RowsOfPage=12&TeacherId=${teacherId}&courseLevelId=${levelId}&TechCount=1&ListTech=${categoryId}&CostDown=${min}&CostUp=${max}`);
        return result;
    } catch (error) {
        return error;
    }
};

export {Filter};