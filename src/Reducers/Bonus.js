import { incBonus, incByAmt } from "../Actions/actions";

export function bonusReducer(state = { points: 1 }, action) {
    switch (action.type) {
        case incBonus:
            return { points: state.points + 1 };
        case incByAmt:
            if (action.payloa >= 100)
                return { points: state.points + 1 };
        default:
            return state;
    }
}