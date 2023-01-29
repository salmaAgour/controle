const initialState = {
    data: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { 
                ...state, 
                data: [...state.data, action.title] 
              };
        case 'UPDATE_TASK':
            return {
                ...state,
                data: [...action.tasks]
              }
        case 'DELETE_TASK':
            return {
                ...state,
                data: [...action.tasks]
              }
        default:
            return state;
    }
}

export default reducer