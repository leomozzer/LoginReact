import {createStore} from 'redux';

const INITIAL_STATE = {
    name: '',
    email: '',
    profilephoto: '',
    login: false,
}

function login(state = INITIAL_STATE, action){
    switch (action.type){
        case 'LOGIN':
            return {...state, 
                login : !INITIAL_STATE.login,
                name: action.data.name,
                email: action.data.email,
                profilephoto: action.data.image
            }
        default:
            return state;
    }
}

const store = createStore(login);
export default store;