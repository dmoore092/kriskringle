import React, { Component } from 'react';
import './MyPrefs.css';

export class MyPrefs extends Component {
  
  constructor(props){
    super(props);
    this.state={
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (event) {
    this.setState({
        Name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form className="home-form" id="form1" method="POST" action="http://www.polishcampout.com:80/backend/mysql.php">
            <p className="spacer"><span className="preferences">I am..</span></p>
            <select value={this.state.value} onChange={this.handleChange} name ="name">
                    <option value="" ></option>
                    <option value="Dale">Dale</option>
                    <option value="Justin">Justin</option>
                    <option value="Steven">Steven</option>
                    <option value="Sam">Sam</option>
            </select>
            <p className="spacer"><span className="preferences">and my top 3 items are...</span></p>
            <span className="preferences">Preference 1:</span>
                <input type="text" name="pref1" id="pref1"></input>
                <span className="preferences">Preference 2:</span>
                <input type="text" name="pref2" id="pref2"></input>
                <span className="preferences">Preference 3:</span>
                <input type="text" name="pref3" id="pref3"></input>
                <button type="submit" className="login-btn" id="see-prefs-btn" name="give-prefs">Submit</button>
                <div className="alert">Preferences Saved!</div>
        </form>
      </div>
    )
  }
}

export default MyPrefs
// if(isset($_POST["btnsubmit"])){
//   //block cross-site scripting, html entities(apersand etc), trim white space
//   $name    =  htmlentities(strip_tags(trim($_POST["name"])));
//   $subject =  htmlentities(strip_tags(trim($_POST["subject"])));
//   $comment =  htmlentities(strip_tags(trim($_POST["comment"])));

//   //block sql injections
//   $name    = mysqli_real_escape_string($mysqli, $_POST["name"]);
//   $subject = mysqli_real_escape_string($mysqli, $_POST["subject"]);
//   $comment = mysqli_real_escape_string($mysqli, $_POST["comment"]);

//   //build the database query
//   $query   = "INSERT INTO final_exam_comments 
//               SET name = '" . $name . "',
//                   subject = '" . $subject . "',
//                   comment = '" . $comment. "'";

//   $result = mysqli_query($mysqli, $query);
//   $num_rows = mysqli_affected_rows($mysqli);
  
//   //reset all the fields
//   echo "<script type='text/javascript'> document.location = 'comments.php'; </script>";
  
//   if($result && $num_rows > 0){
//       $msg = $_POST["name"] . " was successfully saved.";
//   }
// }