import thunk from 'redux-thunk'
import { compose, applyMiddleware } from 'redux'

let log = () => {}
// FIXME this should be in store.js no here
let enhance = applyMiddleware(thunk)

if (__DEV__) {
    // code in this block is eliminated during
    // packaging by dead code elimination
    log = console.log.bind(console)

    log('Using __DEV__ config')

    // using commonjs `require` here to allow import to be eliminated,
    // because es6 `import` doesn't support block scoped imports
    const devTools = require('remote-redux-devtools')
    const devToolsConfig = {
        name: 'MedicalDb',
        hostname: 'localhost',
        port: 5678
    }

    enhance = compose(enhance, devTools(devToolsConfig))
}

export {
    enhance,
    log
}
