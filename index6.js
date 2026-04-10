function allSettled(promises) {
  const completedPromises = [];
  promises.forEach((p, i) => {
    if (typeof p.then === 'function') {
      p.then((value) => {
        completedPromises.push({ id: i, status: 'fulfilled', value: value });
      }).catch((err) => {
        completedPromises.push({ id: i, status: 'rejected', reason: err });
      });
    } else {
      completedPromises.push({ id: i, status: 'fulfilled', value: p });
    }
  });
  return new Promise((resolve, reject) => {
    const intId = setInterval(() => {
      if (completedPromises.length === promises.length) {
        resolve(completedPromises);
        clearInterval(intId);
      }
    }, 0);
  })
    .then((arr) => arr.sort((a, b) => a.id - b.id))
    .then((result) =>
      result.map((e) => {
        const keys = Object.keys(e);
        const value = keys[2];
        return { 'status': e.status, [value]: e[value] };
      }),
    );
}
allSettled([
  1,
  2,
  3,
  new Promise((res, reject) => {
    setTimeout(() => res(4), 2000);
  }),
  new Promise((res, rej) => {
    rej('error');
  }),
]).then((result) => console.log(result));
