import React, { Component } from 'react';

export class SeePrefs extends Component {
  
  constructor(props){
    super(props);
    this.state={
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (event) {
    this.setState({
        Name: event.target.value
    })
  }

  handleSubmit (event) {
    console.log('Name: ' + this.state.Name);
    //event.preventDefault();
  }
  
  componentDidMount() {
    fetch('https://www.polishcampout.com:8888/backend/mysql.php')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div>
        <div>
            <form className="home-form"
                    id="form2"
                    method="post"
                    action="http://www.polishcampout.com:8888/backend/mysql.php"
                    onSubmit={this.submit} >
                <p className="spacer"><span className="preferences">I want to see..</span></p>
                <select value={this.state.value} onChange={this.handleChange} name="name">
                    <option value='' ></option>
                    <option value="Dale">Dale's</option>
                    <option value="Justin">Justin's</option>
                    <option value="Steven">Steven's</option>
                    <option value="Sam">Sam's</option>
                </select>
                <p className="spacer"><span className="preferences">preferred items...</span></p>
                
                <button type="submit" className="login-btn" id="mains-btns" name="who" >Show me!</button>
                <div className="show-results"></div>
                <div className="show-results1"></div>
            </form>
        </div>
      </div>
    )
  }
}

export default SeePrefs
