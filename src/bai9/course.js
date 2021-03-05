import axios from "axios";
import actionCreate from "./ActionCreator";
import { FETCH_COURSE_LIST } from "./constant.";

//create async action to dispatch to middleware to call api
export const fetchCourses = (dispatch) => {
    axios({
        method: "GET",
        url:
            "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
        .then((res) => {
            console.log(res.data);
            dispatch(actionCreate(FETCH_COURSE_LIST, res.data));
        })
        .catch((err) => {
            console.log(err);
        });
};

