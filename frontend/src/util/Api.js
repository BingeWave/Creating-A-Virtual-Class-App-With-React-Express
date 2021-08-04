const API = {
    login : function(data, successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain('/login');

        this._call('POST', url, data, successCallback, errorCallback);

    },
    register : function(data, successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain('/register');

        this._call('POST', url, data,  successCallback, errorCallback);

    },
    getClasses : function(successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToClass);

        this._call('GET', url, null,  successCallback, errorCallback);
    },
    getClass : function(id,  successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToClass + '/' + id);

        this._call('GET', url, null,  successCallback, errorCallback);
    },
    createClass : function(data,  successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToClass);

        this._call('POST', url, data,  successCallback, errorCallback);
    },
    updateClass : function(id, data,  successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToClass + '/' + id);

        this._call('PUT', url, data,  successCallback, errorCallback);
    },
    deleteClass : function(id,  successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToClass + '/' + id);

        this._call('DELETE', url, null,  successCallback, errorCallback);
    },
    registerForClass : function(id, data,  successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToClass + '/' + id + '/register');

        this._call('POST', url, data,  successCallback, errorCallback);
    },
    hasAccessToClass : function(class_id, user_id,  successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToClass + '/canAccess');

        this._call('POST', url, {class_id : class_id, user_id : user_id},  successCallback, errorCallback);
    },
    getCohorts : function(successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToCohorts);

        this._call('GET', url, null,  successCallback, errorCallback);
    },
    getCohort : function(id,  successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToCohorts + '/' + id);

        this._call('GET', url, null,  successCallback, errorCallback);
    },
    createCohort : function(data,  successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToCohorts);

        this._call('POST', url, data,  successCallback, errorCallback);
    },
    updateCohort : function(id, data,  successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToCohorts + '/' + id);

        this._call('PUT', url, data,  successCallback, errorCallback);
    },
    deleteCohort : function(id,  successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToCohorts + '/' + id);

        this._call('DELETE', url, null,  successCallback, errorCallback);
    },
    addUserToCohort : function(id, data, successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToCohorts + '/' + id + '/adduser');

        this._call('POST', url, data,  successCallback, errorCallback);
    },
    removeUserFromCohort : function(id, data, successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToCohorts + '/' + id + '/removeuser');

        this._call('DELETE', url, data,  successCallback, errorCallback);
    },
    addClassToCohort : function(id, data, successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToCohorts + '/' + id + '/addclass');

        this._call('POST', url, data,  successCallback, errorCallback);
    },
    removeClassFromCohort : function(id, data, successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToCohorts + '/' + id + '/removeclass');

        this._call('DELETE', url, data,  successCallback, errorCallback);
    },
    getMyAccount : function(successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToUsers + '/me');

        this._call('GET', url, null,  successCallback, errorCallback);
    },
    getMyTickets : function(id, successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToUsers + '/' + id + '/tickets');

        this._call('GET', url, null,  successCallback, errorCallback);
    },
    updateMyAccount : function(data, successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToUsers);

        this._call('PUT', url, data,  successCallback, errorCallback);
    },
    getUser : function(id,  successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToUsers + '/'+ id);

        this._call('GET', url, null,  successCallback, errorCallback);
    },
    getUsers : function(successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToUsers);

        this._call('GET', url, null,  successCallback, errorCallback);
    },
    setAccountToRole : function(data, successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToUsers + '/setrole');

        this._call('POST', url, data,  successCallback, errorCallback);
    },
    removeAccountFromRole : function(data, successCallback, errorCallback) {
        const url = this._getUrlWithApiDomain(this._pathToUsers + '/removerole' );

        this._call('POST', url, data,  successCallback, errorCallback);
    },
    getMaterials : function(class_id, successCallback, errorCallback) {

    },
    _getUrlWithApiDomain: function (url) {
        return process.env.REACT_APP_API_URL + url;
    },
    _getAuthToken: function () {
        return window.localStorage.getItem('auth_token');
    },
    _pathToClass : '/classes',
    _pathToCohorts : '/cohorts',
    _pathToUsers : '/users',
    _call: function (method, url, options, successCallback, errorCallback) {

        const auth_token = this._getAuthToken();

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth_token
            },
            body: (options) ? JSON.stringify(options) : null
        }).then(function (response) {

            if (!response.ok) { 
                response.text()
                .then(text => {throw new Error(text)})
                .catch(function (response) {
                    errorCallback(response);   
                });;
            }
            
            return response.json();
        }).then(function (response) {

            successCallback(response);

        }).catch(function (response) {

        });
    },
}

export default API;