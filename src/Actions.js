import * as ActionTypes from './ActionTypes'

// import AppDispatcher from './AppDispatcher'

export const increment = (counterCaption) => {
    return {
        type: ActionTypes.INCREMENT,
        counterCaption
    }
}
export const decrement = (counterCaption) => {
    return {
        type: ActionTypes.DECREMENT,
        counterCaption
    }
}