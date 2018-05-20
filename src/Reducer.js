import * as ActionTypes from './ActionTypes'

export default (state, action) => {
    const { type, counterCaption } = action
    switch (type) {
        case ActionTypes.INCREMENT:
        return {...state, [counterCaption]: state[counterCaption] + 1}
        case ActionTypes.DECREMENT:
        return {...state, [counterCaption]: state[counterCaption] - 1}
        default :
        return state
    }
}