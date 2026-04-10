function wait(ms) {
  return new Promise((res) => setTimeout(() => res(), ms));
}

async function code() {
  await wait(1000);
  console.log('success'); // Выведется через 1000 мс
}
code();