let APIURL = ''

switch(window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:3001'
        break
    case 'tristanoshier.herokuapp.com':
    case 'tristanoshier.com':
        APIURL = 'https://tristanoshier-server.herokuapp.com'
        break
    default: // we should never hit default case, add to get rid of warning
        APIURL = 'http://localhost:3001'
}

export default APIURL