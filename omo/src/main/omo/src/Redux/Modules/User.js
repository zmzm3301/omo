import { createAction, handleActions } from 'redux-actions';  // { 액션생성함수, 리듀서 } 작성 편의성 패키지
import { produce } from 'immer';  // 불변성 관리 편의성 패키지
import { setCookie, getCookie, deleteCookie } from 'react-cookie';

//1. Actions (액션 타입 정하기)
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

//2. Action Creators (액션생성함수 만들기) createAction을 사용하여 편리하게 작성하기.
// >> const 함수명 = createAction(Action타입, (매개변수) => ({반환변수}));
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

//3. initialState (초기상태값 설정하기)
const initialState = {
    user: null,
    is_login: false
};

// middleware actions
const loginAction = (user) => {
    return function (dispatch, getState, { history }) {
        console.log(history);
        dispatch(logIn(user));
        history.push('/');
    }
}

//4. Reducer (리듀서 만들기) handleActions을 사용하여 편리하게 작성하기.
export default handleActions(
    {
        // immer 패키지의 produce 사용으로 불변성 관리하기.
        // produce(원본값, (원본값을 복사해 넘겨주는 값) => {수행할 내용})
        [LOG_IN]: (state, action) => produce(state, (draft) => {
            setCookie("is_login", "success");
            draft.user = action.payload.user;
            draft.is_login = true;
        }),
        [LOG_OUT]: (state, action) => produce(state, (draft) => {
            deleteCookie("is_login");
            draft.user = null;
            draft.is_login = false;
        }),
        [GET_USER]: (state, action) => { },
    },
    initialState);

//5. Action Creator export (액션생성함수 내보내기)
const actionCreators = {
    logIn,
    logOut,
    getUser,
    loginAction
};
export { actionCreators };