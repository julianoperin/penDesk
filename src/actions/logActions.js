import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
} from "./types";

//! Get Logs
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//! Add Log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//! Delete Logs
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//! Set loading true
export const setCurrent = () => {
  return {
    type: SET_LOADING
  }
}

//! Set loading true
export const setCurrent = () => {
  return {
    type: SET_LOADING
  }
}


// //! UpDate Logs
// export const updateLog = (id) => async (dispatch) => {
//   try {
//     setLoading();

//     await fetch(`/logs/${id}`, {
//       method: "PUT",
//     });

//     dispatch({
//       type: UPDATE_LOG,
//       payload: id,
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.data,
//     });
//   }
// };

//! Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
