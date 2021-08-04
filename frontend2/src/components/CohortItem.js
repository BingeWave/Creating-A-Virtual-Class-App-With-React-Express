import React from 'react';

import Roles from '../util/Roles';


function CohortItem(props) {

    let viewUrl = '/cohorts/view/' + props.cohort.id;

    let editUrl = '/cohorts/admin/' + props.cohort.id;

    let adminUrl = '/cohorts/admin/' + props.cohort.id;

    let image_url = (props.cohort.image_large_sq_url) ? props.cohort.image_large_sq_url : 'https://via.placeholder.com/150';

    let adminButtons = '';

    if(Roles.isAdmin() || Roles.isSuperAdmin()){
      adminButtons = (
          <span>
            <a href={editUrl} className="btn btn-sm btn-outline-secondary">Edit</a>
            <a href={adminUrl} className="btn btn-sm btn-outline-secondary">Admin</a>
            <a href={editUrl} className="btn btn-sm btn-outline-secondary">Remove</a>
          </span>
        );
    }


    return (
        <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" alt="Cohort" src={image_url} />

            <div className="card-body">
              <h3>{props.cohort.name}</h3>
              <p className="card-text">{props.cohort.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href={viewUrl} className="btn btn-sm btn-outline-secondary">View</a>
                  {adminButtons}
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
    );
}

export default CohortItem;