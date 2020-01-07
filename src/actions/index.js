export const ADD_CLASS = 'ADD_CLASS';
export const DELETE_CLASS = 'DELETE_CLASS';

export const addClass = newClass => {
    return { type: ADD_CLASS, payload: newClass }
}

export const deleteClass = id => {
    return { type: DELETE_CLASS, payload: id }
}

