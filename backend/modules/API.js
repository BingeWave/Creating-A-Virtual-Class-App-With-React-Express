const request = require('request');


module.exports = {

    getOrganizerToken : function(){

        let token = process.env.BW_ORGANIZER_TOKEN;

        return token;
    },
    login : function(data, token){

        const url = 'https://bw.bingewave.com/auth/login';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    register : function(data, token){

        const url = 'https://bw.bingewave.com/auth/register';

        const organizer_id = process.env.BW_ORGANIZER_ID;

        data['organizer_id'] = organizer_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    getAccounts : function(token){

        const organizer_id = process.env.BW_ORGANIZER_ID;

        const url = 'https://bw.bingewave.com/accounts?organizer_id=' + organizer_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'GET', null, resolve, reject, token);
        })
    },
    getAccount : function(id, token){

        const url = 'https://bw.bingewave.com/accounts/' + id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'GET', null, resolve, reject, token);
        })
    },
    updateAccount : function(data, token){

        const url = 'https://bw.bingewave.com/accounts';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'PUT', data, resolve, reject, token);
        })
    },
    getAccountTickets : function(id, token){

        const url = 'https://bw.bingewave.com/accounts/' + id + '/tickets';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'GET', null, resolve, reject, token);
        })
    },
    setUserToRole : function(data, token){

        const organizer_id = process.env.BW_ORGANIZER_ID;

        const url = 'https://bw.bingewave.com/organizers/' + organizer_id + '/setUserToRole';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    removeUserFromRole : function(data, token){

        const organizer_id = process.env.BW_ORGANIZER_ID;

        const url = 'https://bw.bingewave.com/organizers/' + organizer_id + '/removeUserFromRole';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    getCohorts : function(token){

        const organizer_id = process.env.BW_ORGANIZER_ID;

        const url = 'https://bw.bingewave.com/cohorts?organizer_id=' + organizer_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'GET', null, resolve, reject, token);
        })
    },
    getCohort : function(id, token){

        const url = 'https://bw.bingewave.com/cohorts/' + id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'GET', null, resolve, reject, token);
        })
    },
    createCohort : function(data, token){

        const url = 'https://bw.bingewave.com/cohorts';

        const organizer_id = process.env.BW_ORGANIZER_ID;

        data['organizer_id'] = organizer_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    updateCohort : function(id, data, token){

        const url = 'https://bw.bingewave.com/cohorts/' + id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'PUT', data, resolve, reject, token);
        })
    },
    deleteCohort : function(id, data, token){

        const url = 'https://bw.bingewave.com/cohorts/' + id ;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'DELETE', data, resolve, reject, token);
        })
    },
    addUserToCohort : function(id, data, token){

        const url = 'https://bw.bingewave.com/cohorts/' + id +'/addAccount' ;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    removeUserFromCohort : function(id, data, token){

        const url = 'https://bw.bingewave.com/cohorts/' + id +'/removeAccount' ;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    addClassToCohort : function(id, data, token){

        const url = 'https://bw.bingewave.com/cohorts/' + id +'/addEvent' ;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    removeClassFromCohort : function(id, data, token){

        const url = 'https://bw.bingewave.com/cohorts/' + id +'/removeEvent' ;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },

    getClasses : function(data, token){

        const organizer_id = process.env.BW_ORGANIZER_ID;

        const url = 'https://bw.bingewave.com/events?organizer_id=' + organizer_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'GET', data, resolve, reject, token);
        })
    },
    getClass : function(id, data, token){

        const url = 'https://bw.bingewave.com/events/' + id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'GET', data, resolve, reject, token);
        })
    },
    createClass : function(data, token){

        const url = 'https://bw.bingewave.com/events';

        const organizer_id = process.env.BW_ORGANIZER_ID;

        data['organizer_id'] = organizer_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    updateClass : function(id, data, token){

        const url = 'https://bw.bingewave.com/events/' + id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'PUT', data, resolve, reject, token);
        })
    },
    cancelClass : function(id, data, token){

        const url = 'https://bw.bingewave.com/events/' + id + '/cancel';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    registerForClass : function(id, data, token){

        const url = 'https://bw.bingewave.com/events/' + id + '/register';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    hasTicketForClass : function(class_id, user_id, token){

        const url = 'https://bw.bingewave.com/events/' + class_id + '/hasTicket/' + user_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'GET', null, resolve, reject, token);
        })

    },
    addUserForClass : function(id, data, token){

        const url = 'https://bw.bingewave.com/events/' + id + '/addUserToAttendees';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    sendOnScreenMessage(id, data, token){
        const url = 'https://bw.bingewave.com/events/' + id + '/sendOnscreenMessage';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    sendOnScreenPoll(id, data, token){
        const url = 'https://bw.bingewave.com/events/' + id + '/sendOnscreenPoll';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    listMaterials : function(event_id, token){

        const organizer_id = process.env.BW_ORGANIZER_ID;

        const url = 'https://bw.bingewave.com/events/' + event_id + '/groups?organizer_id=' + organizer_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'GET', null, resolve, reject, token);
        })
    }, 
    createMaterial : function(event_id, data, token){

        const url = 'https://bw.bingewave.com/events/' + event_id + '/materials';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    updateMaterial : function(event_id, material_id, data, token){

        const url = 'https://bw.bingewave.com/events/' + event_id + '/materials/' + material_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'PUT', data, resolve, reject, token);
        })
    },
    deleteMaterial : function(event_id, material_id, data, token){

        const url = 'https://bw.bingewave.com/events/' + event_id + '/materials/' + material_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'DELETE', data, resolve, reject, token);
        })
    },
    listGroups : function(event_id, token){

        const organizer_id = process.env.BW_ORGANIZER_ID;

        const url = 'https://bw.bingewave.com/events/' + event_id + '/groups?organizer_id=' + organizer_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'GET', null, resolve, reject, token);
        })
    },
    createGroup : function(event_id, data, token){

        const url = 'https://bw.bingewave.com/events/' + event_id + '/groups';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    updateGroup : function(event_id, material_id, data, token){

        const url = 'https://bw.bingewave.com/events/' + event_id + '/groups/' + material_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'PUT', data, resolve, reject, token);
        })
    },
    deleteGroup : function(event_id, material_id, data, token){

        const url = 'https://bw.bingewave.com/events/' + event_id + '/groups/' + material_id;

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'DELETE', data, resolve, reject, token);
        })
    },
    createPoll : function(event_id, data, token){

        const url = 'https://bw.bingewave.com/events/' + event_id + '/groups';

        return new Promise((resolve, reject) => {
            this._sendRequest(url, 'POST', data, resolve, reject, token);
        })
    },
    _sendRequest : function(url, method, data, resolve, reject, token) {
        return request(url, { 
            json: true, 
            method : method, 
            body: data,
            headers : {
                "Authorization" : token
            }
        }, (err, res, body) => {
            if (err) reject(err)
            resolve(body)
          });

    }
}