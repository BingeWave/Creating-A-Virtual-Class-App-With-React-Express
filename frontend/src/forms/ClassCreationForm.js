import React from 'react';

import DateTimePicker from 'react-datetime-picker';


function ClassForm(props) {
    
  
    return (
      <div>
          <div className="form-field">
                <label>Class Name</label>
                <input type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'event_title')}  />
          </div>

          <div className="form-field">
                <label>Class Description</label>
                <textarea type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'event_description')}  />
          </div>

          <div className="mb-3">
            <label  className="form-label">
              Date/Time
            </label>
            <DateTimePicker onChange={(date) => props.handleDateField(date, 'requested_date_1')}  />
          </div>

          <div className="form-field">
                <label>Instructor Video Chat View</label>
                <select className="form-control" onChange={(e) => props.handleInputField(e, 'video_chat_layout_host')} >
                    <option value="1">Standard</option>
                    <option value="2">Classroom View</option>
                    <option value="3">Grid View</option>
                </select>
               
          </div>

          <div className="form-field">
                <label>Student Video Chat View</label>
                <select className="form-control" onChange={(e) => props.handleInputField(e, 'video_chat_layout_attendee')}  >
                    <option value="1">Standard</option>
                    <option value="2">Classroom View</option>
                    <option value="3">Grid View</option>
                </select>
          </div>
      </div>
    );
  }

  export default ClassForm;