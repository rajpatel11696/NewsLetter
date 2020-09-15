const { DARK_MODE, SIGN_IN } = require("../action/ActionType");


const initialState = {
    darkMode: false,
    signin: '',

}

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case DARK_MODE:
            return {
                ...state,
                darkMode: action.payload
            };
            break
            case SIGN_IN:
                return {
                    ...state,
                    signin: action.payload
                };
                break

        default:
            return state;
    }
}

export default mainReducer