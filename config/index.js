var env = process.env.NODE_ENV
console.log('wwwwwwwwwwww')
console.log(env)

if (env == 'prod') {
    BASE_URL = 'http://humorboom.com'
    API_URL = 'http://humorboom.com/backend/'
}else if (env == 'dev_online') {
    BASE_URL = 'http://humorboom.com'
    API_URL = 'http://humorboom.com/backend/'
}else {
    BASE_URL = 'http://localhost:9000/'
    API_URL = 'http://humorboom.com/backend/'
}
module.exports = {
    BASE_URL,
    API_URL
}