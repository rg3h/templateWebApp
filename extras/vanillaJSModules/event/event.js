/**
 * @fileoverview event.js -- simplify custom events
 */
export {dispatchEvent, listenForEvent};

/*export*/ function dispatchEvent(eventName, opt_data) {
  let event = new Event(eventName);
  event.detail = opt_data;
  document.body.dispatchEvent(event);
}

/*export*/ function listenForEvent(eventName, eventHandlerFn) {
  document.body.addEventListener(eventName, eventHandlerFn);
}
