import alt from '../alt';
import {assign} from 'underscore';
class HomeActions {
	constructor() {
		this.generateActions(
				'loginFormSuccess',
				'loginFormFail',
				'invalidEmail',
				'invalidPassword',
				'updateEmail',
				'updatePassword',
				'signUp'
			);
	}

	login(credentials) {
		$.ajax({
			type: 'POST',
			url: '/addUser',
			data: {email: credentials.email, password: credentials.password}
		})
		  .done((data) => {
		  		this.actions.loginFormSuccess(data);
		  })
		  .fail((jqXhr) => {
		  	this.actions.loginFormFail('Some error occured');
		  });
	}
}

export default alt.createActions(HomeActions);