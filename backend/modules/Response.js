
module.exports = {

    successResponse : function(response, object){
        
        if(object.status === 'success'){

            response.json(object.data);

        } else if(object.status === 'failure'){

            let messages = this._compileErrors(object.errors);
            
            response.status(400).send(messages);
        } else {
            this.errorResponse(response, 500, 'Unknown error');
        }
    },
    errorResponse : function(response, status, message){
        
        response.status(status).send({
            message: message
        });
    },
    _compileErrors : function(data){

        let messages = [];

        if (data) {

            if (typeof data === 'object' && data !== null) {
                for (let [key, value] of Object.entries(data)) {
    
                    if (typeof value === 'object' && value !== null) {
    
                        for (let [key2, value2] of Object.entries(value)) {
                            messages.push(value2);
                        }//end for
    
                    } else {
                        messages.push(value);
                    }
    
                }//end for
    
            } else if (Array.isArray(typeof data)) {
                data.array.forEach(element => {
                    messages.push(element);
                });
            } else if (typeof data === 'string') {
                messages.push(data);
            }
        }

        return messages;
    }

}