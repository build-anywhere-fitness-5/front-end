const initialState = {
    classes: [
        {
            date: '2019-12-12',
            className: 'CrossFit'
        }
    ]
}

export const classReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        default:
            return state
    }
}