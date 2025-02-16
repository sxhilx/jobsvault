const CustomAPIError = require('./custom-error')
const BadRequest = require('./bad-request')
const NotFoundError = require('./not-found')
const UnauthenticatedError = require('./unauthenticated')

module.exports = {
    CustomAPIError,
    BadRequest,
    UnauthenticatedError,
    NotFoundError
}