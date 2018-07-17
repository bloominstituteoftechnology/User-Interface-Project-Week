const RedFlux = (function() {
  return {
    createStore: function(reducer) {
      let state = null;
      const listeners = [];
      return {
        getState: function getState() {
          return state;
        },
        subscribe: function(listener) {
          listeners.push(listener);
        },
        dispatch: function(action) {
          state = reducer(state, action);
          listeners.forEach(function(listener) {
            listener(state);
          });
        }
      };
    },
    combineReducers: function(reducers) {
      return function(state, action) {
        const combinedState = {};

        Object.keys(reducers).forEach(reducerName => {
          combinedState[reducerName] = reducers[reducerName](
            state ? state[reducerName] : undefined,
            action
          );
        });

        return combinedState;
      };
    }
  };
})();
