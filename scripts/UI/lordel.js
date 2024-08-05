/**
 * Получение элемента по селектору
 * @arg {string} selector
 * @arg {HTMLElement} root
 * @returns {HTMLElement}
*/
function getElem(selector, root = document) {
  if (selector instanceof HTMLElement) return selector;
  const elem = root.querySelector(selector);
  if (!elem) throw new Error('Не удалось обнаружить искомый элемент.');
  return elem;
};
/**
 * Получение списка элементов
 * @arg {string} selector
 * @arg {HTMLElement} root
 * @returns {HTMLElement[]}
*/
function getElems(selector, root = document) {
  return Array.from(root.querySelectorAll(selector)) ?? [];
};
/**
 * @arg {HTMLElement|string} elem
 * @arg {HTMLElement|string} ancestor
 * @returns {HTMLElement}
*/
function getAncestor(elem, ancestor) {
  const sequence = [];
  if (!elem) return sequence;
  do {
    sequence.push(elem);
    elem = elem.parentElement;
  } while (elem && elem !== ancestor);
  return sequence;
};
/**
 * Получение всех свойств элемента в виде объекта
 * @arg {HTMLElement} elem
*/
function getAttrsElem(elem) {
  const result = {};
  for (const attr of elem.attributes) result[attr.name] = attr.value;
  return result;
};
/**
 * Установка свойств для элемента
 * @arg {HTMLElement} elem Элемент
 * @arg {string[]} attrs Свойства элемента
 * @arg {boolean} reset Если свойство уже было установлено, то всё равно переприсваивается
*/
function setAttrsElem(elem, attrs, reset) {
  if (attrs instanceof Array) for (let attr of attrs) {
    attr = attr.split('=');
    if (elem.getAttribute(attr[0]) === attr[1] && reset || !reset) elem.setAttribute(...attr.split('='));
  };
  return elem;
};
/**
 * Создание элемента
 * @typedef AcreateElem
 * @prop {keyof HTMLElementTagNameMap} type
 * @prop {string?} id
 * @prop {string?} clss
 * @prop {string?} text
 * @prop {string[]?} attrs
 * @prop {(AcreateElem|HTMLElement)[]?} childs
 * @prop {string|HTMLElement} parent
 * @prop {CSSStyleDeclaration} style
 * @arg {AcreateElem} args
*/
function createElem(args = {}) {
  
  const {
    type,
    parent,
    childs,
  } = args;

  const el = document.createElement(type);
  
  setPropsElem(el, args);
  
  if (parent) {
    let pel = parent;
    if (typeof pel === 'string') pel = getElem(parent);
    pel.append(el);
  };

  if (childs?.length) {
    childs.forEach(child => {
      if (child instanceof HTMLElement) {
        el.append(child);
      } else if (typeof child === 'object') {
        child = createElem(child);
        el.append(child);
      };
    });
  };

  return el;

};
/**
 * @typedef AsetPropsElem
 * @prop {string?} id
 * @prop {string?} clss
 * @prop {string?} text
 * @prop {string[]?} attrs
 * @prop {CSSStyleDeclaration} style
 * @arg {HTMLElement|string} elem
 * @arg {AsetPropsElem} sets
*/
function setPropsElem(elem, sets) {

  if (typeof elem === 'string') {
    elem = getElem(elem);
  } else if (!(elem instanceof HTMLElement)) {
    throw new Error('');
  };

  const {
    id,
    clss,
    text,
    attrs,
    style,
  } = sets;

  if (id) {
    elem.id = id;
  };
  
  if (typeof clss === 'string') {
    elem.classList.add(...clss.split(' '));
  };

  if (text) {
    elem.textContent = text;
  };

  if (attrs?.length) {
    attrs.filter(attr => typeof attr === 'string').forEach(attr => elem.setAttribute(...attr.split('=')));
  };

  if (typeof style === 'object') {
    for (const key of style) {
      elem.style[key] = style[key];
    };
  };

};