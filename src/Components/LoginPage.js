import React ,{Component} from 'react';
import './Login.scss';
class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            uname: "",
            password: "",
            login: "",
            isLoggedIn: false,
            isLoggedout: true
        };
        this.onSubmit= this.onSubmit.bind(this);
      }
      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
      
  onSubmit = e => {
    e.preventDefault();
    if(this.state.uname==="admin"&& this.state.password==="admin"){
        window.location.assign('home');
    }else{
        this.setState({alert : "Invalid username or password"})
    }
    };
    render() {
        const errorStyle = {
            color: "#FF5722"
        }
          return (
              <div className="container">
              <div className="overlay">
                <div className="ui-panel login-panel">
                  <header>
                    <div className="logo" align="center">
                      <span>Weather App</span>
                    </div>
                  </header>
                  <form  noValidate onSubmit={this.onSubmit}>
                    <div className="login-form">
                      <input className="form-control" type="uname" name="uname" id="uname" required="" onChange={this.onChange} value={ this.state.uname }/>
                      <input className="form-control" type="password" name="password" id="password" required="" onChange={this.onChange} value = {this.state.password} />
                    </div>
                  <footer>
                    <div align="center" className="form-actions">
                      <button className="orange">Login</button>
                    </div>
                    <p style = {errorStyle}>{this.state.alert}</p>
                  </footer>
                  </form>
                </div>
              </div>
              </div>
          );
      }
 }
 export default LoginPage;