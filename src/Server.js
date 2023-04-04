const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Inicialização do Express
const app = express();

const Users = [{
  email: "thiago.amaro.r@gmail.com",
  pass: "123456"
}]

const Response = [{
  code: 0,
  message: ''
}]

// Configuração do middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Configuração das rotas
app.post("/auth", (req, res) => {
  let email = req.body.email;
  let pass = req.body.pass;
  console.log(email, pass)
  if(email && pass){
    if(email === Users[0].email && pass === Users[0].pass){
        Response.code = 1;
        Response.message = "Sucesso";
    }else{
        Response.code = 2;
        Response.message = "Erro";
    }
  }else{
      Response.code = 3;
      Response.message = "Preencha os campos";
  }
  res.json({code: Response.code, message: Response.message})
  res.end();
})


// Configuração da porta de escuta
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});