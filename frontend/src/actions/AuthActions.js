import * as AuthApi from "../api/AuthRequests";
export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    alert("Login successful")
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
    alert("Invalid username or password")
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    alert("Signup successful")
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
    alert("Signup failed");
  }
};


export const logout = ()=> async(dispatch)=> {
  console.log("hi-1")
  dispatch({type: "LOG_OUT"})
}
