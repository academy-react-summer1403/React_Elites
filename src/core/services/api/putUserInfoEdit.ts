import http from '../../interceptor/index.ts'

export const putUserInfoEdit = async (values)  => {
    try{
        const response = await http.put("/SharePanel/UpdateProfileInfo", values);
        return response
    }
    catch(error){
        return false
    }
}