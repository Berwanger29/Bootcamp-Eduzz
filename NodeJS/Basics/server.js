const { stat } = require('fs');
const http = require('http'); //requisição do método http
const host = 'http://localhost'
const port = 3000
const stats = require('./manageRam.js')

//http.createServer() cria o servidor
//.listen() recebe a porta (por padrão localhost) e executa uma função
// https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener

// navegador faz uma requisição pro endereço ==> node RESponde ==> res.end('<h1>working</h1>')




http.createServer((req, res) =>{
    let url = req.url;
    if(url === '/stats'){
        res.end(JSON.stringify(stats, null, 2))
    } else {
        res.end('<h1>root</h1>')
    }

})
.listen(port, () => {
    console.log(`Server is running in ${host}:${port}`)
})