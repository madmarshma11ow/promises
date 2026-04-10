function delayedAdd(a, b, delay, callback) {
  setTimeout(() => callback(null, a + b), delay);
}
delayedAdd(2, 3, 1000, (err, sum) => {
  if (err) return console.error(err);
  console.log('sum =', sum); // 5
});
