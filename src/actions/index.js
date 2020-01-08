export const ADD_CLASS = 'ADD_CLASS';
export const SCHEDULE_CLASS = 'SCHEDULE_CLASS';
export const UNSCHEDULE_CLASS = 'UNSCHEDULE_CLASS';
export const EDIT_CLASS = 'EDIT_CLASS';
export const DELETE_CLASS = 'DELETE_CLASS';
export const ADD_PASS = 'ADD_PASS';
export const DELETE_PASS = 'DELETE_PASS';
export const EDIT_PASS = 'EDIT_PASS';


export const addClass = newClass => {
    return { type: ADD_CLASS, payload: newClass }
}
export const scheduleClass = scheduleClass => {
    return { type: SCHEDULE_CLASS, payload: scheduleClass }
}
export const unscheduleClass = unscheduleClass => {
    return { type: UNSCHEDULE_CLASS, payload: unscheduleClass }
}
export const deleteClass = id => {
    return { type: DELETE_CLASS, payload: id }
}
export const addPass = newPass => {
    return { type: ADD_PASS, payload: newPass}
}
export const deletePass = id => {
    return { type: DELETE_PASS, payload: id}
}

export const editPass = id => {
    return { type: EDIT_PASS, payload: id}
}

export const editClass = editClass => {
    return { type: EDIT_CLASS, payload: editClass }
}