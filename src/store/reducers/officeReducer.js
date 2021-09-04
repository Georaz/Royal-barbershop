import {
    ASSIGN,
    DELETE_ASSIGN,
    ASSIGN_LIMIT,
    ASSIGN_POSSIBLE,
    ASSIGN_SORT
} from '../actions';

const initialState = {
    assignment: [],
    isAssignable: true,
};

const officeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ASSIGN:
            const newAssignment = {
                date: action.date,
                time: action.time,
                service: action.service,
                id: Date.now()
            }
            return {
                ...state,
                assignment: [...state.assignment, newAssignment]
            }

        case DELETE_ASSIGN:
            return {
                ...state,
                assignment: state.assignment.filter(item => item.id !== action.id)
            }

        case ASSIGN_LIMIT:
            return {
                ...state,
                isAssignable: false
            }

        case ASSIGN_POSSIBLE:
            return {
                ...state,
                isAssignable: true
            }

        case ASSIGN_SORT:
            return {
                ...state,
                assignment: state.assignment.sort((a, b) => a.date > b.date ? 1 : -1)
            }

        default:
            return state;
    }
}

export const assignAC = (date, time, service) => ({type: ASSIGN, date, time, service})
export const deleteAssignAC = (id) => ({type: DELETE_ASSIGN, id})
export const assignLimitAC = () => ({type: ASSIGN_LIMIT})
export const assignPossibleAC = () => ({type: ASSIGN_POSSIBLE})
export const assignSortAC = () => ({type: ASSIGN_SORT})

export default officeReducer;
