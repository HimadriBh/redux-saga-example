import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga(){
    yield takeLatest("API_CALL_REQUEST", workerSaga)
}

function fetchDog(){
    return axios.get("https://dog.ceo/api/breeds/image/random")
}

function* workerSaga(){
    try {
        const data = yield call(fetchDog);
        // console.log(data.data[0].url)
        const dog = data.data.message;
        // const dog = data.data[0].url;
        yield put({type: "API_CALL_SUCCESS", dog });
    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error })
    }


}