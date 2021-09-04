import {connect} from "react-redux";
import {addCommentAC, deleteCommentAC} from "../../../store/reducers/mainPageReducer";
import CommentForm from "./CommentForm";

const mapStateToProps = (state) => {
    return {
        comments: state.mainPageReducer.comments,
        isAuth: state.authReducer.isAuth,
        commentAdded: state.mainPageReducer.commentAdded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (newComment) => {
            dispatch(addCommentAC(newComment))
        },
        deleteComment: (comment) => {
            dispatch(deleteCommentAC(comment))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);