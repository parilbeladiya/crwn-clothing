import USER_ACTION_TYPE from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
     createAction( USER_ACTION_TYPE.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(USER_ACTION_TYPE.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTION_TYPE.CHECK_USER_SGOOGLE_SIGN_IN_STARTESSION);

export const emailSignInStart = (email, password) => createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) => createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) => createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) => createAction(USER_ACTION_TYPE.SIGN_UP_START, { email, password, displayName });

export const signUpSuccess = (user, additionalDetails) => createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) => createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error);
