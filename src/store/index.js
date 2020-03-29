import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import reducer from './modules'

function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
  const store = createStore(reducer, enhancer)

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
