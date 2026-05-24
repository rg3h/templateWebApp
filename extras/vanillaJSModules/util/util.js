// @fileoverview util.js

export {
  getVersion, // get the app version, defaults to 1.0.0
  setVersion, // set the app version
  isBrowser,  // true if running in a browser
  isNode,     // true if running as a node script
  saveFile,   // saves text to a file
  sleep       // async sleep in seconds: await sleep(3.5) sleeps 3.5 seconds
}

var appVersion = '1.0.0';

/*export*/ function getVersion() {
  return appVersion;
}

/*export*/ function setVersion(newVersion) {
  appVersion = newVersion;
}

/*export*/ function isBrowser() {
  return typeof window === 'object'
}


/*export*/ function isNode() {
  return typeof process === 'object';
}

/*export*/ function saveFile(fileName, text) {
  const blob = new Blob([text], {type:"text/plain;charset=utf-8"});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(link.href);
  document.body.removeChild(link);
}

// can be fractions of a second: await sleep(3.5);  // sleep for 3.5 seconds
/*export*/ function sleep(seconds) {
  let ms = seconds * 1000;
  return new Promise((r) => setTimeout(r,ms));
}
