function readConfig(path, callback) {
  if (typeof path === 'string') {
    setTimeout(() => callback(null, { path: path }), 1000);
  } else {
    return callback(new Error('path is not a string'));
  }
}

readConfig('/etc/app.json', (err, cfg) => console.log(err ? err.message : cfg)); // {path: '/etc/app.json }
readConfig(42, (err) => console.log(err)); // Error
