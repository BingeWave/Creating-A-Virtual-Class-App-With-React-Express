import React from 'react';

function UserForm(props) {
    
    return (
      <div>
          <div className="form-field">
                <label>First Name</label>
                <input type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'first_name')} defaultValue={props.data.first_name} />
          </div>

          <div className="form-field">
                <label>Last Name</label>
                <input type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'last_name')} defaultValue={props.data.last_name} />
          </div>

          <div className="form-field">
                <label>Bio</label>
                <textarea type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'last_name')} defaultValue={props.data.bio}  />
          </div>

          <div className="form-field">
                <label>Facebook Profile Url</label>
                <input type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'facebook')} defaultValue={props.data.facebook} />
          </div>

          <div className="form-field">
                <label>LinkedIn Profile Url</label>
                <input type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'linkedin')} defaultValue={props.data.linkedin} />
          </div>

          <div className="form-field">
                <label>Twitter Profile Url</label>
                <input type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'twitter')} defaultValue={props.data.twitter} />
          </div>

          <div className="form-field">
                <label>Github Profile Url</label>
                <input type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'github')} defaultValue={props.data.github} />
          </div>
      </div>
    );
  }

  export default UserForm;