const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config({path: 'variables.env'});

const Recipe = require('./model/Recipe')
const User = require('./model/User')


/**
 * Initialize Application
 */
 
const app = express()
const PORT = process.env.PORT || 4444
app.listen(PORT, () =>{
    console.log(`Server is listening on PORT ${PORT}`)
})


/**
 * Applying Middleware
 */
app.use(bodyParser.json())
app.use(cors())

/**
 * Bringing Graphql Express Middleware
 */
const {graphiqlExpress, graphqlExpress} = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools')

const { typeDefs } = require('./schema');
const { resolvers} = require('./resolvers');

/**
 * Create Schema
 */
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})


/**
 * Connect to Database
 */

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('DB Connected'))
.catch(error=> console.error())




/**
 * Create GraphQL application
 */
app.use(
    '/graphiql',
     graphiqlExpress({
    endpointURL:'/graphql'
}))

/** 
 * Connect Schemas to GraphQL
 */

app.use('/graphql',
    graphqlExpress({
        schema,
        context:{
            Recipe,
            User
        }
    }))