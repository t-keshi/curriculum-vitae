/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from 'react';

const toggleReducer = (state: boolean, nextValue?: any) =>
  typeof nextValue === 'boolean' ? nextValue : !state;

export const useToggle = (initialValue = false): [boolean, (nextValue?: any) => void] =>
  useReducer<React.Reducer<boolean, any>>(toggleReducer, initialValue);
