import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types';
import authReducer from '../reducers/auth_reducer';

export const CREATE_POSTS = 'CREATE_POSTS';

// const ROOT_URL = 'http://rest.learncode.academy/api/aaron';
const ROOT_URL = "http://localhost:4000"

export function signinUser({email, password}){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
		.then(response => {
			//this only starts if the request was good
			//We now update the state to indicate authenticated user
			dispatch({type: AUTH_USER});
			//this will put the token in localStorage. It's safe!!
			localStorage.setItem('token', response.data.token);
			//this sends us off to the /newitem view
			browserHistory.push('/newitem');
		})
		.catch(response => dispatch(authError("Bad login info")));
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function signupUser({email, password}){
	return function(dispatch){
		//submit email/password to the server
		axios.post(`${ROOT_URL}/signup`, {email, password})
		.then(response => {
			dispatch({type: AUTH_USER});

			//upate the token
			localStorage.setItem('token', response.data.token);
			browserHistory.push('/newitem');
		})
		.catch(response => dispatch(authError(response.data.error)));
	}
}

export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}

//purpose of type is to catch unauth_user case.
//flips auth flag to false & there won't be any links associated with them
//other thing to do is get rid of token

export function signoutUser(){
	localStorage.removeItem('token');

	return {type: UNAUTH_USER};
}