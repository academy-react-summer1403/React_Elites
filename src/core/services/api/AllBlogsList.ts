import http from '../../interceptor/index'

const getAllBlogsList = async () => {
    try {
    const result = await http.get('/News?PageNumber=1&RowsOfPage=6');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getAllBlogsList};