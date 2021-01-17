import { SET_MORE_TAB } from "../actions/actionType"

const BACKGROUND = 'background';
const INTERESTS = 'interests';

const EDUCATION = 'education';
const WORK = 'work';
const EXTRACURRICULAR = 'extracurricular';
const MUSIC = 'music';
const DRAWING = 'drawing';
const VIDEO = 'video';

const initialState = {
  top: BACKGROUND,
  secondary: EDUCATION
}

export const moreTabReducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case SET_MORE_TAB:
      if(action.payload.top === BACKGROUND) {
        newState.top = BACKGROUND;
        switch (action.payload.secondary) {
          case EDUCATION:
            newState.secondary = EDUCATION;
            return newState;
          case WORK:
            newState.secondary = WORK;
            return newState;
          default:
            return newState;
        }

      } else if (action.payload.top === INTERESTS) {
        newState.top = INTERESTS;
        if (action.payload) {
          switch (action.payload.secondary) {
            case EXTRACURRICULAR:
              newState.secondary = EXTRACURRICULAR;
              return newState;
            case MUSIC:
              newState.secondary = MUSIC;
              return newState;
            case DRAWING:
              newState.secondary = DRAWING;
              return newState;
            case VIDEO:
              newState.secondary = VIDEO;
              return newState;
            default:
              return newState;
          }
        }
      }

      return state;

    default:
      return state;
  }
}