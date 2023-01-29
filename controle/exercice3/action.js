export const myAdd =(title)=>{
    return {
        type: 'ADD_TASK',
        title
    }
}
export const myUpdate =(tasks)=>{
    return {
        type: 'UPDATE_TASK',
        tasks
    }
}
export const myDelete =(tasks)=>{
    return {
        type: 'DELETE_TASK',
        tasks    }
}