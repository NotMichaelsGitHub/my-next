export const addTurn = () => {
  return {
    type: 'DEBUG_INCREMENT_TURN',
  };
};

export const makeMove = (location) => {    
  return {
    type: 'MAKE_MOVE',
    location: location,
  };
};