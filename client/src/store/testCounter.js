const initialState = false;

const testCounter = (state = initialState, action) => {
    if (action.type === 'CHANGE') {
        return !state
    } else {
        return state
    };
}

export default testCounter;