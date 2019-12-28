var env = process.env.NODE_ENV
console.log('wwwwwwwwwwww')
console.log(env)

if (env == 'prod') {
    BASE_URL = 'http://mygameparty.com'
    API_URL = 'http://mygameparty.com/backend/'
}else if (env == 'dev_online') {
    BASE_URL = 'http://mygameparty.com'
    API_URL = 'http://mygameparty.com/backend/'
}else {
    BASE_URL = 'http://localhost:3032/'
    API_URL = 'http://mygameparty.com/backend/'
}
module.exports = {
    BASE_URL,
    API_URL
}
