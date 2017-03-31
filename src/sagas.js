/**
 * Created by dongjiehe on 2017/3/29.
 */
import {takeEvery,fork} from 'redux-saga/effects'
function *test(action) {
    console.log(action)
}
function *yy() {
    yield takeEvery('TEST',test)
}
function *yy1() {
    yield takeEvery('TEST1',test)
}
export default function *mysaga() {
       yield [fork(yy),fork(yy1)]
}