import { SET_MORE_TAB } from "./actionType";

export const setMoreTab = (top, secondary) => {
    return {
    type: SET_MORE_TAB,
    payload: {
        top,
        secondary
    }
}}