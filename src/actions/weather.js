import axios from 'axios'
import {GET_CURRENT_WEATHER, WEATHER_ERROR, GET_WEATHER_FROM_HISTORY } from './types'

//get current weather
export const getWeather = (lat, lng, address) => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
        dispatch ({
            type: GET_CURRENT_WEATHER,
            payload:{...res.data, address}
        })
    } catch (err) {
        dispatch({
            type: WEATHER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}

//get weather from history
export const getWeatherFromHistory = (item) => async dispatch => {
    try {
        // const res = await axios.get(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
        dispatch ({
            type: GET_WEATHER_FROM_HISTORY,
            payload: item
        })
    } catch (err) {
        dispatch({
            type: WEATHER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}
