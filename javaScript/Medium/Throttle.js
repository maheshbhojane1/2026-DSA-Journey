function throttle(fn, dealy) {
  let lastCall = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastCall < dealy) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

function sendMessage(message) {
  console.log("Sending Message", message);
}

const chatMessage = throttle(sendMessage, 2 * 1000);

chatMessage("Hello");
chatMessage("Please reply");
chatMessage("Tell me the way");
chatMessage("How to get discount");
chatMessage("Hi");
