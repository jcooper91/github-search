import React, { useReducer } from 'react';
import AlertReducer from './alertReducer'
import AlertContext from './alertContext'
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {

    const intialState = null 
    const [state, dispatch] = useReducer(AlertReducer, intialState)

    const setAlert = (msg, alert) => {
        dispatch({
            type: SET_ALERT,
            payload: {msg,alert}
        })
        setTimeout(() => dispatch({type: REMOVE_ALERT}), 2000)
    }

    return (
        <AlertContext.Provider
        value={{
            setAlert,
            alert:state 
        }}
        >
        {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
