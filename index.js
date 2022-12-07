const express = require('express');
const app = express();
const path = require('path'); //manejar las rutas de mi propio sitio web
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("views", path.join(__dirname, "views")); //nombre del directorio

router.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname + '/templates/index.html'));
});

router.get("/contacto", (req, res) =>{
    res.sendFile(path.join(__dirname + '/templates/contacto.html'));
});

router.get("/perfil", (req, res) =>{
    res.sendFile(path.join(__dirname + '/templates/documento.pdf'));
});

router.post("/", (req, res) =>{
    // res.send(req.body); //Para ver que nos está mandando
    res.send("El usuario " + req.body.first_name + " ha sido registrad@");
})

app.use("/", router);
app.listen(process.env.port || 8080); //variable de entorno

console.log("Activo en el puerto 8080");