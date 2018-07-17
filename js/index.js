// JS goes here
store.subscribe(state => {
  console.log(state);
});

store.dispatch({
  type: 'NAVBAR_SHOW'
});

store.dispatch({
  type: 'UPDATE_ACTIVE',
  activeTabNumber: 3
});
