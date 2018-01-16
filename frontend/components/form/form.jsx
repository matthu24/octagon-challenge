import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {first_name: '', last_name: '', email: '', zip: '', state: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
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
        <form className='form'>
            <h1>User Information</h1>
            <label htmlFor='first_name'>
              <input type='text' placeHolder="First Name" value={this.state.first_name} onChange={this.update("first_name")}/>
            </label>
            <br/>

            <label htmlFor='last_name'>
              <input type='text' placeHolder="Last Name" value={this.state.last_name} onChange={this.update("last_name")}/>

            </label>
            <br/>

            <label htmlFor='email'>
              <input type='text' placeHolder="Email" value={this.state.first_name} onChange={this.update("email")}/>

            </label>
            <br/>

            <label htmlFor='zip'>
              <input type='text' placeHolder="Zip" value={this.state.first_name} onChange={this.update("zip")}/>

            </label>
            <br/>

            <label htmlFor='state'>
              <input type='text' placeHolder="State" value={this.state.first_name} onChange={this.update("state")}/>

            </label>
            <br/>

        </form>
      </div>
    )
  }
}

export default Form;
