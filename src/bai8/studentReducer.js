import { SET_STUDENT } from "./contanst";

let initialState = {
        name: 'Cao Đức Huy',
        age: 0,
}

const nStudent = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_STUDENT:
            state = payload;
            return { ...state };
        default:
            return state;
    }
}

export default nStudent;