let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function render() {
  document.body.textContent = state.count;
}

function dispatch(action) {
  state = changeState(state, action);
  console.log('dispatch',state);
  render();
}

console.log('before',state);
dispatch(action);
dispatch(action);


