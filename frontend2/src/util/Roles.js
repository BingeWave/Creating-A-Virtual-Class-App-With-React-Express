const Roles = {

    isSuperAdmin : function() {

        if(this._parseRoles().is_super_admin === '1'){
            return true;
        }

        return false;
    },

    isAdmin : function() {

        if(this._parseRoles().is_admin === '1'){
            return true;
        }

        return false;
    },
    isMember : function() {

        if(this._parseRoles().is_member === '1'){
            return true;
        }

        return false;
    },
    _parseRoles : function() {

        let roles = window.localStorage.getItem('roles');

        return (roles) ? JSON.parse(roles) : {};
    }

}

export default Roles;