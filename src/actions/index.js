export const ADD_CLASS = 'ADD_CLASS';

export const addClass = newClass => {
    return { type: ADD_CLASS, payload: newClass }
}