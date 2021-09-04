import {
    ADD_COMMENT,
    DELETE_COMMENT
} from '../actions';

import x from '../../images/x.jpg';
import conor from '../../images/conor.jpg';
import snake from '../../images/snake.jpg';

const initialState = {
    commentAdded: false,
    comments: [
        {
            avatar: conor,
            name: "Конор МакГрегор",
            text: "Зашёл сюда после официальных мероприятий, в которых я участвовал в России, и не прогадал. Обогрели, постригли, побрили, развеселили. Теперь драться буду с отличным настроением!",
            id: Date.now()
        },
        {
            avatar: x,
            name: "Мистер Х",
            text: "Всё прошло здорово! Зашёл выпить Егермайстер, а здесь ещё и стригут!",
            id: Date.now()
        }
    ],
};

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const newComment = {
                avatar: snake,
                name: 'Georaz',
                text: action.payload,
                id: Date.now(),
                myComment: true
            }
            return {
                ...state,
                comments: [...state.comments, newComment],
                commentAdded: true
            }

        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment?.myComment === undefined),
                commentAdded: false
            }

        default:
            return state;
    }
}

export const addCommentAC = (payload) => ({type: ADD_COMMENT, payload})
export const deleteCommentAC = (payload) => ({type: DELETE_COMMENT, payload})

export default mainPageReducer;

