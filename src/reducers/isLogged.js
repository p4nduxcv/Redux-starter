/* eslint-disable default-case */
const loggedReducer = (State = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !State;
        default:
            return false
    }
}
export default loggedReducer;