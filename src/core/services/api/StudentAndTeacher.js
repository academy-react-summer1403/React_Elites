import http from '../../interceptor/index'
import { baseUrl } from "../../../config/config";

const getStudentAndTeacherCount = async () => {
    try {
        const result = await http.get(
            '/Home/LandingReport'
        );
    
        return result;
    }
    catch (err) {
        return [];
    }
};

export {getStudentAndTeacherCount};