import DatePicker from "./DatePicker";
import {connect} from "react-redux";
import {
    assignAC,
    assignLimitAC,
    assignPossibleAC,
    assignSortAC,
    deleteAssignAC
} from "../../store/reducers/officeReducer";

const mapStateToProps = (state) => {
    return {
        assignment: state.officeReducer.assignment,
        isAssignable: state.officeReducer.isAssignable
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        assign: (date, time, service) => {
            dispatch(assignAC(date, time, service))
        },
        deleteAssign: (id) => {
            dispatch(deleteAssignAC(id))
        },
        monthsSwitch: (month) => {
            switch (month) {
                case 0:
                    return 'января';
                case 1:
                    return 'февраля';
                case 2:
                    return 'марта';
                case 3:
                    return 'апреля';
                case 4:
                    return 'мая';
                case 5:
                    return 'июня';
                case 6:
                    return 'июля';
                case 7:
                    return 'августа';
                case 8:
                    return 'сентября';
                case 9:
                    return 'октября';
                case 10:
                    return 'ноября';
                case 11:
                    return 'декабря';
                default:
                    return null;
            }
        },
        assignLimit: () => {
            dispatch(assignLimitAC())
        },
        assignPossible: () => {
            dispatch(assignPossibleAC())
        },
        assignSort: () => {
            dispatch(assignSortAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);