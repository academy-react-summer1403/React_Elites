import http from '../../interceptor/index.ts'

const getCourseList = async (count) => {
  try {
    console.log("Fetching started...");
    const result = await http.get(`/Home/GetCoursesTop?Count=${count}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCourseList};