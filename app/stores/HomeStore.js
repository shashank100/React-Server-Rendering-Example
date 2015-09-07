import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
	constructor() {
		this.bindActions(HomeActions);
		this.email = '';
		this.password = '';
		this.helpBlock = '';
		this.users = [];
	}

	onLoginFormSuccess(successData) {
		this.users = successData;
	}

	onLoginFormFail(errorMessage) {
		this.helpBlock = errorMessage;
	}

	onInvalidEmail() {
		this.helpBlock = 'Please Enter an Email id';
	}

	onInvalidPassword() {
		this.helpBlock = 'Please Enter a Password';
	}

	onUpdateEmail(event) {
		this.helpBlock = '';
		this.email = event.target.value;
	}

	onUpdatePassword(event) {
		this.helpBlock = '';
		this.password = event.target.value;
	}
}

export default alt.createStore(HomeStore);