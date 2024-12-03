import http from '../../interceptor/index.ts'

const Filter = async (teacherId, pageInation, levelId, categoryId, max, min) => {
    try {
        const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&CostDown=${min}&CostUp=${max}&courseLevelId=${levelId}&CourseTypeId=&TeacherId=${teacherId}`);
        return result;
    } catch (error) {
        return error;
    }
};

export {Filter};