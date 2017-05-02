import {GET_REQUEST, getSuccess, getFailure} from '../../actions/help'
import { put, take, call, fork } from 'redux-saga/effects';


function fetchApigetHelpArticle(data) {

return fetch(`/url/url/url`, {method: 'POST', body: JSON.stringify(data), headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}, credentials: 'same-origin'
})
    .then((response) => {
        if (response.status !== 200) {
            throw new Error('error!');
        }

        return response.json();
    })
    .catch(response => {
        return {error: response}
    });
}


export default function* getHelpArticle() {
    while (true) {
        let data = yield take(GET_REQUEST);
        let result = yield call(fetchApigetHelpArticle, data);
        if (result.error) {
            yield put(getFailure(result));


        } else {
            yield put(getSuccess(result));


        }
    }
}