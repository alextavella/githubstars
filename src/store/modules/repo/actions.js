export const ACTIONS_NAME = {
  ADD_USERNAME_REQUEST: '@repo/ADD_USERNAME_REQUEST',
  ADD_USERNAME_SUCCESS: '@repo/ADD_USERNAME_SUCCESS',
  ADD_USERNAME_ERROR: '@repo/ADD_USERNAME_ERROR',
};

export function addUsernameRequest(username) {
  return {
    type: ACTIONS_NAME.ADD_USERNAME_REQUEST,
    username,
  };
}

export function addUsernameSuccess(repos) {
  return {
    type: ACTIONS_NAME.ADD_USERNAME_SUCCESS,
    repos,
  };
}

export function addUsernameError(message) {
  return {
    type: ACTIONS_NAME.ADD_USERNAME_ERROR,
    message,
  };
}
