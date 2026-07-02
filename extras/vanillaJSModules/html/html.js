// @fileoverview module html.js exports several HTML functions.

// table of contents of exported functions in alphabetical order
export {
  CHECKMARK_SYM,
  EDIT_SYM,
  SPACE_SYM,
  X_SYM,
  addClassNameOrList,
  attachToDom,
  createDiv,
  createElement,
  createImg,
  createTextNode,
  getFirstText,
  getFirstTextNode,
  insertAsFirst,
  setText,
  waitForImgToLoad,
};


/*export*/ const CHECKMARK_SYM = '\u2713';
/*export*/ const CLOSE_SYM     = '\u2613';
/*export*/ const EDIT_SYM      = '\u270E';
/*export*/ const GEAR_SYM      = '\u2699';
/*export*/ const SPACE_SYM     = '\u00A0';
/*export*/ const X_SYM         = '\u2717';


// add a classname or list of class names (string or array)
/*export*/ function addClassNameOrList(element, classNameOrList) {
  if (element) {
    let newClassList = [];
    if (typeof classNameOrList === 'string') {
      newClassList = classNameOrList.split(' ');
    } else if (Array.isArray(classNameOrList)) {
      newClassList = classNameOrList;
    }

    for (let i = 0, count = newClassList.length; i < count; ++i) {
      let token = newClassList[i];
      if (token && token.length > 0) {
        element.classList.add(token);
      }
    }
  }

  return element;
}


// move all of the elements of ele to the new root, usually the document.body
/*export*/ function attachToDom(ele, newRoot=document.body) {
  while (ele.firstChild) {
    newRoot.appendChild(ele.firstChild);
  }
}


/*export*/ function createDiv (parent, opt_classNameOrList, opt_text) {
  let element = createElement('div', parent, opt_classNameOrList);
  opt_text ? setText(element, opt_text) : null;
  return element;
}


/*export*/ function createElement(elementName, parent, opt_classNameOrList) {
  let element = document.createElement(elementName);
  addClassNameOrList(element, opt_classNameOrList);
  parent ? parent.appendChild(element) : null;
  return element;
}


/*export*/ function createImg (parent, classNameOrList, url, waitForIt=false) {
  let element = createElement('img', parent, classNameOrList);

  if (waitForIt && url) {
    return new Promise((resolve, reject) => {
      element.onload = () => resolve(element);
      element.onerror = reject;
      element.src = url;
    });
  } else {
    url ? element.src = url : null;
    return element;
  }
}

// load an image's source url and wait for it
// usage: await waitForImgToLoad(imgEle, 'someImage.jpg');
/*export*/ function waitForImgToLoad (imgEle, url) {
  if (!imgEle) {
    return null;
  }

  if (!url) {
    return imgEle;
  }

  return new Promise((resolve, reject) => {
      imgEle.onload = () => resolve(imgEle);
      imgEle.onerror = reject;
      imgEle.src = url;
    });
}


/*export*/ function createTextNode(element, text) {
  let textNode = document.createTextNode(text);
  element.appendChild(textNode);
  return textNode;
}


// gets the text string value of the first text node
/*export*/ function getFirstText(element) {
  let textNode = getFirstTextNode(element);
  return textNode ? textNode.nodeValue : null;
}

/*export*/ function getFirstTextNode(element) {
  for (let node in element.childNodes) {
    if (element.childNodes[node].nodeType === Node.TEXT_NODE) {
      return element.childNodes[node];
    }
  }
  return null;
}

/*export*/ function insertAsFirst(parent, element) {
  if (parent) {
    parent.insertBefore(element, parent.firstChild);
  }
}


// sets the first text node or appends if the flag is set
/*export*/ function setText(element, text, append=false) {
  if (append) {
    createTextNode(element, text);
  } else {
    let textNode = getFirstTextNode(element);
    if (textNode) {
      textNode.nodeValue = text;
    } else {
      createTextNode(element, text);
    }
  }
}
