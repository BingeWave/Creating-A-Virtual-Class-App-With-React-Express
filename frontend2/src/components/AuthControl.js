import React from 'react';

import Roles from '../util/Roles';

const AuthControl = (props) => {

    if (props.authRequired && !window.localStorage.getItem("auth_token")) {
        redirectToLogin();
    }

    if (props.allowedRoles && Array.isArray(props.allowedRoles)) {
        
        let isAllowed = false;

        if (!window.localStorage.getItem("auth_token")) {
            redirectToLogin();
        }

        for(let i=0; i<props.allowedRoles.length; i++){
            if (props.allowedRoles[i] === 'member') {
                isAllowed = Roles.isMember();
            } else if (props.allowedRoles[i] === 'admin') {
                isAllowed = Roles.isAdmin();
            } else if (props.allowedRoles[i] === 'super_admin') {
                isAllowed = Roles.isSuperAdmin();
            }

            if (isAllowed === true) {
                break;
            }
        }

        if (!isAllowed) {
            redirectToLogin();
        }
    }

    function redirectToLogin() {

        window.location = '/login';
    }

    return <div>{props.children}</div>;
}

export default AuthControl;