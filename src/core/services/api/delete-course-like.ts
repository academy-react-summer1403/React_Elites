import http from '../../interceptor/index.ts'

const deleteCourseLike = async (value) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }

    try{
        const response = await http.delete(`/Course/DeleteCourseLike`, value, config);
        return response
    }
    catch(error){
        return error
    }
}

export {deleteCourseLike}