import http from '../../interceptor/index.ts'

const deleteCourseReserve = async (id) => {
    try {
        const result = await http.delete('/CourseReserve', {
            id: "a4f54f96-31ae-ef11-b6ed-e2b8c6c9e309"
          });
        return result;
    } catch (error) {
        return [];
    }
};

export {deleteCourseReserve};