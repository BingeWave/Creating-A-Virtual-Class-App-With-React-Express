const express = require('express');
const cors = require('cors');
const port = 3500;

const app = express();

const API = require('./modules/API');
const Response = require('./modules/Response');
const dotenv = require('dotenv');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(cors());

// get config vars
dotenv.config();

app.get('/', (req, res) => {

    API.getDistributorToken()
    .then(response => {
        Response.successResponse(response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error);
    })
})

app.post('/register', async (req, res) => {
    let data = req.body;

    let token = await retrieveDistributorToken(res);

    API.register(data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })
});

app.post('/login', async (req, res) => {

    let data = req.body;

    let token = await retrieveDistributorToken(res);

    API.login(data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });

});

app.get('/users', (req, res) => {

    let token = req.headers.authorization;
  
    API.getAccounts(token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });

});

app.get('/users/:id', (req, res) => {

    let token = req.headers.authorization;

    let id = req.params.id;

    API.getAccount(id, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.get('/users/:id/tickets', (req, res) => {

    let token = req.headers.authorization;

    let id = req.params.id;

    API.getAccountTickets(id, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.put('/users', (req, res) => {
    let token = req.headers.authorization;

    let data = req.body;
  
    API.updateAccount(data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.post('/users/setrole', (req, res) => {
    let token = req.headers.authorization;

    let data = req.body;
  
    API.setUserToRole(data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.post('/users/removerole', (req, res) => {

    let token = req.headers.authorization;

    let data = req.body;
  
    API.removeUserFromRole(data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.get('/cohorts', async (req, res) => {

    let token = req.headers.authorization;

    if(!token|| token === 'null'){

        token = await retrieveDistributorToken(res);
    }

    API.getCohorts(token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.get('/cohorts/:id', async (req, res) => {

    let id = req.params.id;

    let token = req.headers.authorization;

    if(!token || token === 'null'){

        token = await retrieveDistributorToken(res);
    }

    API.getCohort(id, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.post('/cohorts', (req, res) => {

    let data = req.body;

    let token = req.headers.authorization;

    API.createCohort(data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });

});

app.put('/cohorts/:id', (req, res) => {

    let id = req.params.id;

    let data = req.body;

    let token = req.headers.authorization;

    API.updateCohort(id, data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.delete('/cohorts/:id', (req, res) => {
    
    let id = req.params.id;

    let token = req.headers.authorization;

    API.deleteCohort(id, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.post('/cohorts/:id/adduser', (req, res) => {
    
    let id = req.params.id;

    let data = req.body;

    let token = req.headers.authorization;

    API.addUserToCohort(id, data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.delete('/cohorts/:id/removeuser', (req, res) => {
    
    let id = req.params.id;

    let data = req.body;

    let token = req.headers.authorization;

    API.removeUserFromCohort(id, data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.post('/cohorts/:id/addclass', (req, res) => {
    
    let id = req.params.id;

    let data = req.body;

    let token = req.headers.authorization;

    API.addClassToCohort(id, data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});

app.delete('/cohorts/:id/removeclass', (req, res) => {
    
    let id = req.params.id;

    let data = req.body;

    let token = req.headers.authorization;

    API.removeClassFromCohort(id, data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    });
});


app.get('/classes', async (req, res) => {

    let token = req.headers.authorization;

    if(!token || token === 'null'){

        token = await retrieveDistributorToken(res);

    }
    
    API.getClasses(null, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error);
    })

    
});

app.get('/classes/:id', async (req, res) => {

    let token = req.headers.authorization;

    let id = req.params.id;

    if(!token || token === 'null'){

        token = await retrieveDistributorToken(res);
    }

    API.getClass(id, null, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })
});

app.post('/classes', (req, res) => {

    let token = req.headers.authorization;

    let data = req.body;

    API.createClass(data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })

});

app.put('/classes/:id', (req, res) => {

    let token = req.headers.authorization;
    let data = req.body;
    let id = req.params.id;

    API.updateClass(id, data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })
});

app.delete('/classes/:id', (req, res) => {

    let token = req.headers.authorization;
    let data = req.body;
    let id = req.params.id;

    API.cancelClass(id, data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })
});

app.post('/classes/:id/register', async (req, res) => {

    let token = req.headers.authorization;
    let data = req.body;
    let id = req.params.id;

    if(!token || token === 'null'){

         token = await retrieveDistributorToken(res);

    }

    API.registerForClass(id, data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })
});

app.post('/classes/canAccess', (req, res) => {

    let token = req.headers.authorization;

    let data = req.body;

    API.hasTicketForClass(data.class_id, data.user_id, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })
});

app.get('/materials/:id', (req, res) => {

    let token = req.headers.authorization;

    let id = req.params.id;

    API.listMaterials(id, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })
});

app.post('/materials', (req, res) => {

    let token = req.headers.authorization;

    let data = req.body;

    API.createMaterial(id, data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })

});

app.put('/materials/:id', (req, res) => {

    let token = req.headers.authorization;
    let data = req.body;
    let id = req.params.id;

    API.updateMaterial(id, data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })
});

app.delete('/materials/:id', (req, res) => {

    let token = req.headers.authorization;
    let data = req.body;
    let id = req.params.id;

    API.deleteMaterial(id, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })
});


app.post('/registerClass', (req, res) => {

    let token = req.headers.authorization;
    let data = req.body;

    API.createClass(data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })

});

app.post('/registerForClass', (req, res) => {

    let token = req.headers.authorization;
    let data = req.body;

    API.a(data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })

});

app.post('/registerForCohort', async (req, res) => {

    let data = req.body;

    let token = await retrieveDistributorToken(res);

    API.addUserToCohort(data, token)
    .then(response => {
        Response.successResponse(res, response);
    })
    .catch(error => {
        Response.errorResponse(res, 401, error)
    })

});


app.listen(port, () => {
  console.log(`Example class app listening at http://localhost:${port}`)
})

var distributorToken = null;

async function retrieveDistributorToken(response){

    if(distributorToken){
        return distributorToken;
    }

    try {
        let tokenData = await API.getDistributorToken();

        if(tokenData.status == 'success'){

            let token = tokenData.data.auth_token;

            distributorToken = token;

            return token;
        } else {
            Response.successResponse(response, tokenData);
        }
    } catch (error) {
        Response.errorResponse(response, 401, error)
    }

}