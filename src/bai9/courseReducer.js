import { FETCH_COURSE_LIST } from "./constant.";

let initialState = [];

const courseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_COURSE_LIST:
            state = payload;
            return { ...state }
        default:
            return state;
    }
}

export default courseReducer;