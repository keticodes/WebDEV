// WorkoutDispatchContext.js

import React, { createContext, useContext } from 'react';

export const WorkoutDispatchContext = createContext();

export const useWorkoutDispatch = () => {
  const context = useContext(WorkoutDispatchContext);
  if (!context) {
    throw new Error('useWorkoutDispatch must be used within a WorkoutDispatchContextProvider');
  }
  return context;
};


