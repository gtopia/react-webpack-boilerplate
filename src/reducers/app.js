/**
 * Author: zhiyou
 * Date: 2017/06/08
 * Description: 导航页reducer。
 */
import { Map } from 'immutable';
import actionTypes from '../constants/main';

const initialState = Map({
    userInfo: Map({
        islogin: 0,
        nick: '',
        portrait_url: '',
        return_url: '',
        uid: '',
        uname: '',
        userface: ''
    }),
    hasMoreTopic: false,
    isShowMe: false,
    isWant2Logout: false
});

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS: {
            return state.set('userInfo', Map(action.userInfo));
        }
        case actionTypes.SHOW_MORE_TOPICS: {
            return state.set('hasMoreTopic', true);
        }
        case actionTypes.HIDE_MORE_TOPICS: {
            return state.set('hasMoreTopic', false);
        }
        case actionTypes.TOGGLE_ME: {
            if (state.get('isShowMe') == true || state.get('isWant2Logout') == true) {
                state = state.set('isWant2Logout', false).set('isShowMe', false);
            }
            else {
                state = state.set('isShowMe', true);
            }

            return state;
        }
        case actionTypes.HIDE_ME: {
            return state.set('isShowMe', false);
        }
        case actionTypes.WANT_TO_LOGOUT: {
            return state.set('isShowMe', false).set('isWant2Logout', true);
        }
        case actionTypes.CANCEL_LOGOUT: {
            return state.set('isWant2Logout', false);
        }
        case actionTypes.LOGOUT_SUCCESS: {
            state = state.set('userInfo', Map({
                islogin: 0,
                nick: '',
                portrait_url: '',
                return_url: '',
                uid: '',
                uname: '',
                userface: ''
            }));
            return state.set('isWant2Logout', false);
        }
        default: {
            return state;
        }
    }
};
