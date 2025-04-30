const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const setupAndStartServer = async () => {
       
       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({extended:true}));

       app.use('/api/v1' , apiRoutes);

       app.get('/info',(req , res) =>{
              res.json({message:'OK'});
       })

       app.listen(PORT , ()=>{
        console.log(`Server started on the PORT ${PORT}`);
       })
}

setupAndStartServer();