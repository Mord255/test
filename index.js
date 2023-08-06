require("dotenv").config();
const express = require('express')
const cors = require('cors')
const routes = require('./routes/api')
import { typeDefs } from "./app/graphql/typeDefs.js";
import { resolvers } from "./app/graphql/resolvers.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

const app = express()
app.use(cors())
app.set('port' , process.env.APP_PORT || 9000)
app.use(express.json())

async function startApolloServer(typeDefs, resolvers) {
    const server = new ApolloServer({typeDefs, resolvers});
    await server.start();
    app.use("/graphql", cors(), express.json(), expressMiddleware(server));
}

// server running ------------------------------------

app.listen(app.get('port'),()=>{
    console.log('Server running in port: ',app.get('port'))
})

startApolloServer(typeDefs, resolvers)

// server routing ------------------------------------

app.use('/api',routes)

app.get('/',(req,res)=>{ 
    res.send('Iniciando API REST') 
})