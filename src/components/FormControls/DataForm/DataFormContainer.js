import {changeDataAC} from "../../../store/reducers/authReducer";
import DataForm from "./DataForm";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        name: state.authReducer.userData.name,
        surname: state.authReducer.userData.surname,
        password: state.authReducer.userData.password,
        phone: state.authReducer.userData.phone,
        email: state.authReducer.userData.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeData: (payload) => {
            dispatch(changeDataAC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataForm)