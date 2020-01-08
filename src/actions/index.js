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
export const ADD_STUDIO_CLASS = 'ADD_STUDIO_CLASS';
export const EDIT_STUDIO_CLASS = 'EDIT_STUDIO_CLASS';
export const DELETE_STUDIO_CLASS = 'DELETE_STUDIO_CLASS';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER'

//Fetch Data
export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS =  'FETCH_SUCCESS'
export const FETCH_FAILURE ='FETCH_FAILURE'
export const FETCHCAT_SUCCESS ='FETCHCAT_SUCCESS'
export const FETCHCLASS_SUCCESS ='FETCHCLASS_SUCCESS'

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
    .then(res => dispatch({ type: ADD_CATEGORY, payload: id })& console.log(res, "addCategory"))
    .catch(res => dispatch({type: ADD_CATEGORY, payload: id}))
}
export const fetchCategory = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
        .get(
            "https://lambda-anywhere-fitness.herokuapp.com/api/category"
        )
        .then(res => { console.log(res, "Category get");
        dispatch({ type: FETCHCAT_SUCCESS, payload: res.data})})
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
}
export const fetchClasses = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
        .get(
            "https://lambda-anywhere-fitness.herokuapp.com/api/classes"
        )
        .then(res => { console.log(res, "CLASS get");
        dispatch({ type: FETCHCLASS_SUCCESS, payload: res.data})})
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
}
export const deleteCategory = id => dispatch => {
    axiosWithAuth()
    .delete(`https://lambda-anywhere-fitness.herokuapp.com/api/category/${id.id}`)
    .then(res => dispatch({type: DELETE_CATEGORY, payload: id}))
    .catch(err => console.log(err))
}

export const editCategory = id => dispatch => {
    axiosWithAuth()
    .put(`https://lambda-anywhere-fitness.herokuapp.com/api/category/${id.id}`, id)
    .then(res => dispatch({type: EDIT_CATEGORY, payload: id}))
    .catch(err => console.log(err));
    
}


export const editClass = editClass => {
    return { type: EDIT_CLASS, payload: editClass }
}

export const logOut = () => {
    return { type: LOGOUT }
}

export const addStudioClass = newStudioClass => {
    return { type: ADD_STUDIO_CLASS, payload: newStudioClass }
}

export const deleteStudioClass = id => {
    return { type: DELETE_STUDIO_CLASS, payload: id }
}

export const editStudioClass = editStudioClass => {
    return { type: EDIT_STUDIO_CLASS, payload: editStudioClass }
}

export const addUser = user => {
    return { type: ADD_USER, payload: user }
}

export const removeUser = user => {
    return { type: REMOVE_USER }
}