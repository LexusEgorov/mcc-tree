import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appProcess } from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer
});