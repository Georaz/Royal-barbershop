import AuthForm from "./AuthForm";
import {connect} from "react-redux";
import {authSuccessAC, logoutAC, showPopupAC} from "../../../store/reducers/authReducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        userData: state.authReducer.userData,
        correctData: state.authReducer.correctData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authSuccess: () => {
            dispatch(authSuccessAC())
        },
        logout: () => {
            dispatch(logoutAC())
        },
        showPopup: () => {
            dispatch(showPopupAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);