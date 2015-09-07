import React from 'react';
import HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = HomeStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		HomeStore.listen(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleSubmit() {

		var email = this.state.email.trim();
		var password = this.state.password;
		
		if(!email) {
			HomeActions.invalidEmail();
		 }

		 if(!password) {
		 	HomeActions.invalidPassword();
		 }

		 if(email && password) {
		 	 HomeActions.login({
		 	 	email: email,
		 	 	password: password,
		 	 	router: this.context.router
		 	 });
		 }

	}

	componentWillUnmount() {
		HomeStore.unlisten(this.onChange);
	}

	handleSignUpRedirect() {
		HomeActions.signUp({router: this.context.router});
	}

  render() {
  	var temp = this.state.users.map(function(user, i) {
  		return(
					<tr key={i}>
						<td>{user.email}</td>
						<td>{user.password}</td>
					</tr>)
				});
    return (
        <div className="container-fluid ">
	        <div className="row">
		        <div className="col-md-6">
					<input type="text" placeholder="Email id" value={this.state.email} onChange={HomeActions.updateEmail} />
					<input type="password" placeholder="password" value={this.state.password} onChange={HomeActions.updatePassword}/>
					<input type="button" value="Sign In" onClick={this.handleSubmit.bind(this)} />
				</div>
				<div className="col-md-6">
					<table>
						<thead>
							<tr>
								<th>Email</th>
								<th>password</th>
							</tr>
						</thead>
						<tbody>
							{temp}
						</tbody>
					</table>
				</div>
			</div>
		</div>
    );
  }
}

export default Home;