import React from 'react';

import DateTimePicker from 'react-datetime-picker';


function ClassForm(props) {

      let extraFields = '';

      //If has event id
      if (props.data.id) {
            extraFields = (
                  <div className="container mt-2">

                        <div className="card card-body bg-light mb-3">
                              <label>Main Image File</label><br />
                              <input type="file" onChange={(e) => props.handleFileField(e, 'mainImageFile')} /><br />

                        </div>


                        <div className="card card-body bg-light mb-3">
                              <label>Overlay Image File</label><br />
                              <input type="file" onChange={(e) => props.handleFileField(e, 'overlayFile')} />

                        </div>

                  </div>
            )
      }

      return (
            <div>
                  <div className="form-field">
                        <label>Class Name</label>
                        <input type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'title')} defaultValue={props.data.title} />
                  </div>

                  <div className="form-field">
                        <label>Class Description</label>
                        <textarea type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'description')} defaultValue={props.data.description} />
                  </div>

                  <div className="mb-3">
                        <label className="form-label">
                              Date/Time
                        </label>
                        <DateTimePicker onChange={(date) => props.handleDateField(date, 'date')} defaultValue={props.data.date} />
                  </div>

                  <div className="form-field">
                        <label>Instructor Video Chat View</label>
                        <select className="form-control" onChange={(e) => props.handleInputField(e, 'video_chat_layout_host')} value={props.data.video_chat_layout_host}>
                              <option value="1">Standard</option>
                              <option value="2">Classroom View</option>
                              <option value="3">Grid View</option>
                        </select>

                  </div>

                  <div className="form-field">
                        <label>Student Video Chat View</label>
                        <select className="form-control" onChange={(e) => props.handleInputField(e, 'video_chat_layout_audience')} value={props.data.video_chat_layout_audience} >
                              <option value="1">Standard</option>
                              <option value="2">Classroom View</option>
                              <option value="3">Grid View</option>
                        </select>
                  </div>

                  {extraFields}
            </div>
      );
}

export default ClassForm;