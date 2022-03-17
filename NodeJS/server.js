const http = require('http'); //requisição do método http


//http.createServer() cria o servidor
//.listen() recebe a porta (por padrão localhost) e executa uma função
// https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener

http.createServer((req, res) =>{
    res.write('<h1>working</h1>')
})
.listen(3000, () => {
    console.log('Server is running')
})