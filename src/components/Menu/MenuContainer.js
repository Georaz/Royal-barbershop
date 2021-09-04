import {connect} from 'react-redux';
import Menu from "./Menu";
import {logoutAC} from "../../store/reducers/authReducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);