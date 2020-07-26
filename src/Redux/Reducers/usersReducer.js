import {API} from "../API/api";

const ADD_USER = 'usersReducer/addUser'
export const addUserAction = ({id, firstName, lastName, email, phone}) =>
    ({type: ADD_USER, data: {id, firstName, lastName, email, phone}})
const UPLOAD_ALL_USERS = 'usersReducer/uploadAllUsers'
export const uploadAllUsersAction = data => ({type: UPLOAD_ALL_USERS, data})
const SORT_USERS = 'userReducer/sortUsers'
export const sortUsersAction = (property, method) => ({type: SORT_USERS, property, method })
const UPDATE_FORM_DATA = 'userReducer/updateFormData'
export const updateFormDataAction = data => ({type: UPDATE_FORM_DATA, data})
const UPDATE_SEARCH_TEXT = 'userReducer/updateSearchText'
export const updateSearchText = text => ({type: UPDATE_SEARCH_TEXT, text})
const SET_PAGE = 'userReducer/setPage'
export const setPageAction = pageNumber => ({type: SET_PAGE, pageNumber})
const SET_IS_FETCHING = 'userReducer/setIsFetching'
export const setIsFetching = bool => ({type: SET_IS_FETCHING, bool})
const SET_ADD_FORM_ERRORS = 'userReducer/setAddFormErrors'
export const setAddFormErrors = errors => ({type: SET_ADD_FORM_ERRORS, errors})


export const getUsersThunk = (dataType) => {
    return async dispatch => {
        dispatch(setIsFetching(true))
        let data = await API.getUsers(dataType)
        dispatch(uploadAllUsersAction(data))
        dispatch(setIsFetching(false))
    }
}

let initialState = {
    users: [],
    pageSize: 50,
    totalUsers: 0,
    portionSize: 10,
    currentPage: 1,
    isFetching: false,
    addingForm: {},
    errors: {},
    searchText: ''
}

export const usersInstructions = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            let newUser = {
                id: action.data.id,
                firstName: action.data.firstName,
                lastName: action.data.lastName,
                email: action.data.email,
                phone: action.data.phone,
                address: {
                    streetAddress: 'none',
                    city: 'none',
                    state: 'none',
                    zip: 'none'
                },
                description: 'none',
            }
            return {...state, users: [newUser, ...state.users], totalUsers: state.users.length + 1}
        case UPLOAD_ALL_USERS:
            return {...state, users: [...action.data], totalUsers: action.data.length}
        case SORT_USERS:
            if (action.method) {
                return {...state, users: [...state.users.sort((prev, next) => {
                        if (prev[action.property] < next[action.property]) return -1
                        if (prev[action.property] < next[action.property]) return 1
                    })]}
            } else {
                return {...state, users: [...state.users.sort((prev, next) => {
                        if (prev[action.property] > next[action.property]) return -1
                        if (prev[action.property] > next[action.property]) return 1
                    })]}
            }
        case UPDATE_FORM_DATA:
            return {...state, addingForm: {...action.data}}
        case UPDATE_SEARCH_TEXT:
            return {...state, searchText: action.text}
        case SET_PAGE:
            return {...state, currentPage: action.pageNumber}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.bool}
        case SET_ADD_FORM_ERRORS:
            return {...state, errors: action.errors}
        default:
            return state
    }
}

