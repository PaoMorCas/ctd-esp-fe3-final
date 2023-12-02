export const reducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_THEME':
            return {...state, theme: action.payload}
        case 'GET_DENTISTS':
            return {...state, data: action.payload}
        case 'GET_DENTIST': 
            return {...state, dentist: action.payload}
        case 'ADD_FAV':
            return {...state, favs: action.payload} 
        case 'DELETE_FAV':
            return {...state, favs: action.payload} 
        default:
            return state
    }
}