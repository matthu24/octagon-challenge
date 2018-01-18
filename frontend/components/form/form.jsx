import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {first_name: '', last_name: '', email: '', zip: '', state: ''};
  }

  componentWillUnmount(){
    this.props.clearAllErrors();
  }

  componentWillReceiveNewProps(newProps){
    this.props.clearAllErrors();
  }

  renderErrors(){
    const errors = this.props.errors ? (
      <ul>
        {this.props.errors.map((error,i)=> <li key={i}>{error}</li>)}
      </ul>
    ) : null;
    return (
      <div>
        {errors}
      </div>

    )


  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createSingleUser(this.state);
    const first = document.getElementById('first-name');
    first.value='';
    const last = document.getElementById('last-name');
    last.value='';
    const email = document.getElementById('email');
    email.value='';
    const zip = document.getElementById('zip');
    zip.value='';
    const state = document.getElementById('state');
    state.value='';
    // let last = document.
    //this.props. whatever method to persist the data to database
  }

  update(field){
    return(e) => {
      this.setState({[field]:e.target.value});
    }
  }

  render(){
    return(
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor='first_name'>
              <input id="first-name" type='text' placeholder="First Name" value={this.state.first_name} onChange={this.update("first_name")}/>
            </label>
            <br/>

            <label htmlFor='last_name'>
              <input id="last-name" type='text' placeholder="Last Name" value={this.state.last_name} onChange={this.update("last_name")}/>

            </label>
            <br/>

            <label htmlFor='email'>
              <input id="email" type='text' placeholder="Email" value={this.state.email} onChange={this.update("email")}/>

            </label>
            <br/>

            <label htmlFor='zip'>
              <input id ="zip" type='text' placeholder="Zip" value={this.state.zip} onChange={this.update("zip")}/>

            </label>
            <br/>

            <label htmlFor='state'>
              <input id = "state" type='text' placeholder="State" value={this.state.state} onChange={this.update("state")}/>

            </label>
            <br/>
            <input className="submit" type="submit" />

              <div className="errors">
                {this.renderErrors()}
              </div>
        </form>

      </div>
    )
  }
}

export default Form;
