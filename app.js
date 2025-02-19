require('dotenv').config(); 
require('express-async-errors'); 

//extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const ratelimiter = require('express-rate-limit')


const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const authUser = require('./middleware/auth')  

// Swagger
const swaggerUiAssetPath = require('swagger-ui-dist').getAbsoluteFSPath();
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
// const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui.css";


//routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

// error handlers
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
// Serve Swagger UI assets from '/swagger'
app.use('/swagger', express.static(swaggerUiAssetPath));
app.use(ratelimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 request per windowMs
}))
app.use(express.json())
app.use(cors())
app.use(xss())

app.get('/', (req,res) => {
    res.send('<h1>Welcome to Jobs Vault Api</h1><a href="/api-docs">Documentation</a>')
})


app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocument, {
    customCssUrl: '/swagger/swagger-ui.css', // Point to local asset
    customJs: [
      '/swagger/swagger-ui-bundle.js',            // Local bundle file
      '/swagger/swagger-ui-standalone-preset.js'    // Local standalone preset
    ]
  })
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
