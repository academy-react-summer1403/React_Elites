import http from '../../interceptor/index.ts'

const Filter = async (teacherId, pageInation, levelId) => {
    try {
        const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageInation}&RowsOfPage=12&courseLevelId=${levelId}&TeacherId=${teacherId}`);
        return result;
    } catch (error) {
        return [];
    }
};

export {Filter};