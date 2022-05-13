import { ActionWithPayload } from "~/lib/types";

export const ActionTypes = {
  SET_NAME: "SET_NAME",
  SET_AUTHORIZED: "SET_AUTHORIZED",
};


export interface IInitialStatePageInit {
  name : string,
  isAuthorized : boolean
}

const initalState: IInitialStatePageInit = {
  name: "",
  isAuthorized: false,
};

export const setNameUser = (name: string) => {
  return {
    type: ActionTypes.SET_NAME,
    payload: name,
  };
};

export const setAuthorized = (isAuthorized: boolean) => {
  return {
    type: ActionTypes.SET_AUTHORIZED,
    payload: isAuthorized,
  };
};

export const pageInitReducer = (
  state: IInitialStatePageInit = initalState,
  action: ActionWithPayload<any>
):IInitialStatePageInit => {
  switch (action.type) {
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ActionTypes.SET_AUTHORIZED:
      return {
        ...state,
        isAuthorized: action.payload,
      };
    default:
      return state;
  }
};
