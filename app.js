import express from 'express';
import * as url from 'url';
import hbs from 'hbs';
import * as dotenv from 'dotenv';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app =express();
dotenv.config();
const port =process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
//servir contenido estatico
app.use(express.static('public'));
  

app.get('/', (req, res) => {
   res.render('home',{
    nombre:'Alexander Salinas',
    titulo:'Curso Node'
   });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre:'Alexander Salinas',
        titulo:'Curso Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre:'Alexander Salinas',
        titulo:'Curso Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html');
});

app.listen(port,()=>{
    console.log(`escuchando el puerto ${port}`);  
});

