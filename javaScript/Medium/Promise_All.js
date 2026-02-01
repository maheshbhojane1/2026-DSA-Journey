const promise1 = f('https://api.example.com/data/1');
const promise2 = fetch('https://api.example.com/data/2');
const promise3 = fetch('https://api.example.com/data/3');

Promise.all([promise1, promise2, promise3])
  .then((responses) => {
    console.log('All responses:', responses);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
