import {
    AUTH_SUCCESS,
    LOGOUT,
    CHANGE_DATA,
    SHOW_POPUP
} from '../actions';

const initialState = {
    isAuth: false,
    correctData: false,
    userData: {
        name: "Georaz",
        surname: "Лягушкин",
        password: "369",
        phone: "89999000000",
        email: "fakemail@mail.ru"
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true,
                correctData: true
            }

        case LOGOUT:
            return {
                ...state, isAuth: false
            }

        case CHANGE_DATA:
            const newData = {
                name: action.payload.name,
                surname: action.payload.surname,
                password: action.payload.password,
                phone: action.payload.phone,
                email: action.payload.email
            }
            return {
                ...state,
                userData: newData
            }

        case SHOW_POPUP:
            return {
                ...state,
                correctData: false
            }

        default:
            return state;
    }
}

export const authSuccessAC = () => ({type: AUTH_SUCCESS})
export const logoutAC = () => ({type: LOGOUT})
export const changeDataAC = (payload) => ({type: CHANGE_DATA, payload})
export const showPopupAC = () => ({type: SHOW_POPUP})

export default authReducer;

