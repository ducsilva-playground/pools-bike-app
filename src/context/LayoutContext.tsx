/** @format */

import React, { createContext, useReducer, useContext } from 'react';
import { IContextState, ILayoutActionsType } from 'types';

const LayoutStateContext = createContext<IContextState>({
  currentLocation: {},
});

const LayoutDispatchContext = createContext<any>(null);

function layoutReducer(state, action) {
  switch (action.type) {
    case ILayoutActionsType.CURRENT_LOCATION:
      return {
        ...state,
        ...action?.payload,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({ children }: any) {
  const [state, dispatch] = useReducer(layoutReducer, {
    currentLocation: {},
  });

  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

function useLayoutState(): IContextState {
  const context = useContext(LayoutStateContext);
  if (!context) {
    throw new Error('useLayoutState must be used within a LayoutProvider');
  }
  return context;
}

function useLayoutDispatch() {
  const context = useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error('useLayoutDispatch must be used within a LayoutProvider');
  }
  return context;
}

export { LayoutProvider, useLayoutState, useLayoutDispatch, dispatchActions };

function dispatchActions(
  { type = ILayoutActionsType.CURRENT_LOCATION, payload },
  dispatch,
) {
  return dispatch({
    type,
    payload,
  });
}
