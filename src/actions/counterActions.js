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

const methods = {
  increment,
  decrement
}

export default methods;
