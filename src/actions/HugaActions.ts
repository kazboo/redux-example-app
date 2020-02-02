import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const hugaActions = {
  updateTel: actionCreator<string>("ACTIONS_UPDATE_TEL"),
  updateAddress: actionCreator<string>("ACTIONS_UPDATE_ADDRESS")
};
