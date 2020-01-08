import {axiosWithAuth} from '../utils/axiosWithAuth'

export const ADD_CLASS = 'ADD_CLASS';
export const SCHEDULE_CLASS = 'SCHEDULE_CLASS';
export const UNSCHEDULE_CLASS = 'UNSCHEDULE_CLASS';
export const EDIT_CLASS = 'EDIT_CLASS';
export const DELETE_CLASS = 'DELETE_CLASS'
//Passes;
export const ADD_PASS = 'ADD_PASS';
export const DELETE_PASS = 'DELETE_PASS';
export const EDIT_PASS = 'EDIT_PASS';

//Categories
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';


//Logout
export const LOGOUT = 'LOGOUT';


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
    return { type: ADD_PASS, payload: newPass }
}
export const deletePass = id => {
    return { type: DELETE_PASS, payload: id }
}

export const editPass = id => {
    return { type: EDIT_PASS, payload: id }
}
export const addCategory = id => dispatch => {
    //id = the id of the rental item you want to rent
    // renter_id = who is renting the item
    axiosWithAuth()
    .post(`https://lambda-anywhere-fitness.herokuapp.com/api/category`, id)
    .then(res => dispatch({ type: ADD_CATEGORY, payload: id })& console.log(res, "fetchAddRental"))
    .catch(res => dispatch({type: ADD_CATEGORY, payload: id}))
}
export const deleteCategory = id => {
    return { type: DELETE_CATEGORY, payload: id }
}

export const editCategory = id => {
    return { type: EDIT_CATEGORY, payload: id }
}


export const editClass = editClass => {
    return { type: EDIT_CLASS, payload: editClass }
}

export const logOut = () => {
    return { type: LOGOUT }
}