const navbarCollapsed = (state = true, action) => {
  switch (action.type) {
    case 'NAVBAR_COLLAPSE':
      return true;
    case 'NAVBAR_SHOW':
      return false;
    default:
      return state;
  }
};

const activeTab = (state = 1, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE':
      return action.activeTabNumber;
    default:
      return state;
  }
};

const store = RedFlux.createStore(
  RedFlux.combineReducers({
    navbarCollapsed,
    activeTab
  })
);
