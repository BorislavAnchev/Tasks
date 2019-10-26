export const counter = (state, action) => {
  if(typeof state !== 'number') {
    return 0; // If state is anything but a number, we consider it 'undefined'.
  }
  switch(action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state; // If there is some mistake in the action, we do nothing and return the state as it is.
  }
}