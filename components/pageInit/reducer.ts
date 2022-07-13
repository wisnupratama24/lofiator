import { ActionWithPayload } from "~/lib/types";

export const ActionTypes = {
  SET_NAME: "SET_NAME",
  SET_AUTHORIZED: "SET_AUTHORIZED",
  SET_ID: "SET_ID",
};

export interface IInitialStatePageInit {
  name: string;
  id: string;
  isAuthorized: boolean;
}

const initalState: IInitialStatePageInit = {
  name: "",
  isAuthorized: false,
  id: "",
};

export const setNameUser = (name: string) => {
  return {
    type: ActionTypes.SET_NAME,
    payload: name,
  };
};

export const setUserID = (id: string) => {
  return {
    type: ActionTypes.SET_ID,
    payload: id,
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
): IInitialStatePageInit => {
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
    case ActionTypes.SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};
