import http from '../../interceptor/index.ts'

const deleteCourseReserve = async (id) => {
    let config = {
        data: {foo: 'bar'}
    }
    try {
        const result = await http.delete('/CourseReserve', id, config);
        return result;
    } catch (error) {
        return [];
    }
};

export {deleteCourseReserve};