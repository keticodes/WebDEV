// WorkoutsContext.js

import React, { createContext, useContext, useReducer } from 'react';

// Create the WorkoutsContext
export const WorkoutsContext = createContext();

// Define the reducer function to manage workouts
const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload,
      };
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case 'DELETE_WORKOUT':
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

// Custom hook to use the WorkoutsContext
export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw new Error('useWorkoutsContext must be used within a WorkoutsContextProvider');
  }
  return context;
};

// Create the WorkoutsContextProvider
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
