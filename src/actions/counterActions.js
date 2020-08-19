function increment() {
  return {
    type: "INCREMENT"
  };
}

function decrement() {
  return {
    type: "DECREMENT"
  };
}

export default {
  increment,
  decrement
};
