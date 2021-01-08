const createElement = (name, props, ...children) => {
  let element = null;
  if (typeof name === "function") {
    element = name(props);
  } else {
    element = document.createElement(name);
    Object.keys(props || {}).forEach((key) => {
      if (key === "style") {
        Object.keys(props[key]).forEach((styleKey) => {
          element.style[styleKey] = props[key][styleKey];
        });
      } else if (key === "class") {
        props[key].split(" ").forEach((cls) => element.classList.add(cls));
      } else if (key.startsWith("on")) {
        element.addEventListener(key.substr(2).toLowerCase(), props[key]);
      } else {
        element[key] = props[key];
      }
    });
  }
  if (Array.isArray(children)) {
    children.forEach((child) => addChild(element, child));
  } else {
    addChild(element, children);
  }
  return element;
};

const addChild = (element, child) => {
  if (Array.isArray(child)) {
    child.forEach((c) => addChild(element, c));
  } else if (child instanceof HTMLElement) {
    element.appendChild(child);
  } else if (typeof child === "string") {
    element.textContent = child;
  }
};

export default createElement;
