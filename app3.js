const express = require('express');
const path = require('path');  
const { render } = require('ejs');  
const axios = require('axios');  
const app = express();
const https = require('https');
const fs = require('fs');
const port = 80;
const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/fixhouse.us/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/fixhouse.us/privkey.pem')
};
const httpsServer = https.createServer(options, app);
app.use(express.json()); 
  
  console.log('Conexión exitosa a la base de datos');
  // Configuración de las rutas
  app.use(express.static(path.join(__dirname, 'static')));
  app.set('views', path.join(__dirname, 'templates'));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
   
  
   
  app.get('/', async (req, res) => { 
      //return res.render('commingsoon.html') 
      return res.render('index1.html') 
  }); 
  app.get('/admin', async (req, res) => { 
    return res.render('index1.html') 
}); 
  
 

  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  }); 
  httpsServer.listen(443, () => {
    console.log(`Server listening on port ${port}`);
  });