/* eslint-disable default-case */
let INITIAL_STATE = 0;
const counterReducer = (State = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return State + 1;
        case 'DECREMENT':
            return State - 1;
        default:
            return State;
    }
}

export default counterReducer;