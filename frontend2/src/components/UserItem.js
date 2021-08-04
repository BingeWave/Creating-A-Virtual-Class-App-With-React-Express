import React from 'react';

import Roles from '../util/Roles';

function UserItem(props) {

    let viewUrl = '/profile/view/' + props.user.id;

    let editUrl = '/profile/update/' + props.user.id;

    let adminUrl = '/users/admin/' + props.user.id;

    let image_url = (props.user.image_large_sq_url) ? props.user.image_large_sq_url : 'https://via.placeholder.com/150';

    let adminButtons = '';

    let removeFromCohortButton = '';

    let updateProfileButton = '';

    if(window.localStorage.getItem('user_id') === props.user.id){
      updateProfileButton = <a href={editUrl} className="btn btn-sm btn-outline-secondary">Edit</a>;
    }

    if(Roles.isAdmin() || Roles.isSuperAdmin()){
      adminButtons = (
          <span>
            <a href={adminUrl} className="btn btn-sm btn-outline-secondary">Admin</a>
            <a href={editUrl} className="btn btn-sm btn-outline-secondary">Delete</a>
          </span>
        );

        if(props.cohort && props.removeUserFromCohort){ 
          removeFromCohortButton = <button type="button"className="btn btn-sm btn-outline-secondary" onClick={props.removeUserFromCohort}>Remove From Cohort</button>
        }
    }

    return (
        <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" alt="User" src={image_url} />

            <div className="card-body">
              <h3>{props.user.name}</h3>
              <p className="card-text">{props.user.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href={viewUrl} className="btn btn-sm btn-outline-secondary">View</a>
                  {updateProfileButton}
                  {adminButtons}
                  {removeFromCohortButton}
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
    );
}

export default UserItem;