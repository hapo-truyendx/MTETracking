import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/todo/todoSlice';
import rootSaga from './saga';

// disalbe thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export default configureStore({
  reducer: {
    todo: todoSlice
  },
  middleware
});

sagaMiddleware.run(rootSaga);

// src/app/saga.js
