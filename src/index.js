const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const setupAndStartServer = async () => {
       
       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({extended:true}));

       app.use('/' , apiRoutes);

       app.listen(PORT , ()=>{
        console.log(`Server started on the PORT ${PORT}`);
       })
}

setupAndStartServer();