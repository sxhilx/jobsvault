require('dotenv').config(); 
require('express-async-errors'); 

//extra security packages
const helmet = require('helmet')


const cors = require('cors')
const xss = require('xss-clean')
const ratelimiter = require('express-rate-limit')


const express = require('express')
const app = express()
const fs = require('fs')

const connectDB = require('./db/connect')
const authUser = require('./middleware/auth')
  

// Swagger
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')

const path = require('path');


//routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

// error handlers
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware

app.set('trust proxy', 1);
app.use(ratelimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 request per windowMs
}))


app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())


app.get('/', (req,res) => {
    res.send('<h1>Welcome to Jobs Vault Api</h1><a href="/api-docs">Documentation</a>')
})

const file = fs.readFileSync(path.resolve(__dirname, './swagger.yaml'), 'utf8');

// Read the Swagger UI CSS file (custom CSS)
const css = fs.readFileSync(
  path.resolve(__dirname, 'node_modules/swagger-ui-dist/swagger-ui.css'),
  'utf8'
);

const swaggerDocument = YAML.parse(file);

// Define options for Swagger UI setup
const options = {
  customCss: css, // Apply the custom CSS
};

// Serve Swagger UI with the custom CSS
app.use(
  '/api-docs',
  express.static('node_modules/swagger-ui-dist'), // Serve Swagger UI assets
  swaggerUI.serve, // Serve Swagger UI
  swaggerUI.setup(swaggerDocument, options) // Set up Swagger UI with the custom options
);




//routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authUser, jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()
