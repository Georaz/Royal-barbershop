import Office from "./Office";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        name: state.authReducer.userData.name
    }
}

export default connect(mapStateToProps)(Office);