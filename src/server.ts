import express, { request, response } from 'express'

const app = express()

app.get("/", (request, response)=> {
    return response.send("ola Mundo")
})

app.listen(3333, ()=> console.log("Servidor Rodando na porta 3333"));
