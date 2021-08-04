import React from 'react';

function CohortForm(props) {

      let extraFields = '';

      //Only execute if a cohort id is present
      if (props.data.id) {
            extraFields = (
                  <div className="container mt-2">

                        <div className="card card-body bg-light mb-3">
                              <label>Main Image File</label><br />
                              <input type="file" onChange={(e) => props.handleFileField(e, 'mainImageFile')} /><br />

                        </div>

                  </div>
            )
      }

      return (
            <div>
                  <div className="form-field">
                        <label>Cohort Name</label>
                        <input type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'name')} defaultValue={props.data.name} />
                  </div>

                  <div className="form-field">
                        <label>Cohort Description</label>
                        <textarea type="text" className="form-control" onChange={(e) => props.handleInputField(e, 'description')} defaultValue={props.data.description} />
                  </div>

                  {extraFields}
            </div>
      );
}

export default CohortForm;