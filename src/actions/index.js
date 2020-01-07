export const ADD_CLASS = 'ADD_CLASS';
export const ADDTO_CLASS = 'ADDTO_CLASS';
export const SCHEDULE_CLASS = 'SCHEDULE_CLASS';
export const UNSCHEDULE_CLASS = 'UNSCHEDULE_CLASS';


export const addClass = newClass => {
    return { type: ADD_CLASS, payload: newClass }
}

export const addToClass = addToClass => {
    return {type: ADDTO_CLASS, payload: addToClass}
}
export const scheduleClass = scheduleClass => {
    return {type: SCHEDULE_CLASS, payload: scheduleClass}
}
export const unscheduleClass = unscheduleClass => {
    return {type: UNSCHEDULE_CLASS, payload: unscheduleClass}
}