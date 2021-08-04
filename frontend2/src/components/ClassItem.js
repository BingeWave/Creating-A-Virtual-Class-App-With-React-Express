import React from 'react';

import Roles from '../util/Roles';

function ClassItem(props) {

    let classInfoUrl = '/classes/view/' + props.data.id;

    let classUpdateUrl = '/classes/update/' + props.data.id;

    let image = (props.data.image_large_sq_url) ? props.data.image_large_sq_url : 'https://via.placeholder.com/150';

    let removeFromCohortButton = '';

    let adminButtons = '';

    if(Roles.isAdmin() || Roles.isSuperAdmin()){

        if(props.cohort && props.removeClassFromCohort){ 
            removeFromCohortButton = <button type="button" className="btn btn-sm btn-outline-secondary" onClick={props.removeClassFromCohort}>Remove From Cohort</button>
        }

        adminButtons = (
            <span>
              <a href={classUpdateUrl} className="btn btn-sm btn-outline-secondary">Update</a>
            </span>
          );
    }

    return (
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">{props.data.title}</h3>
                <div className="mb-1 text-muted">{props.data.date}</div>
                <div className="card-text mb-auto" dangerouslySetInnerHTML={{ __html: props.data.description }}></div>
                <a href={classInfoUrl} >More Info</a>
                <br />
                {removeFromCohortButton}
                {adminButtons}
            </div>
            <div className="col-auto d-none d-lg-block">
                <img className="img-fluid" alt="Class" src={image} />
            </div>
        </div>
    );
}

export default ClassItem;