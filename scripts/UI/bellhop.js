class BellhopHandler {

  /**
   * @arg {BellhopHandler} args
  */
  constructor(args = {}) {

    const {

      name,
      action,
      priority,
      condition,

    } = args;

    this.name = name;
    this.action = action;
    this.priority = priority;
    this.condition = condition;

  };

  /**
   * @type {string?}
  */
  name;
  /**
   * @type {(self:HTMLBellhopPointElement, prev:HTMLBellhopPointElement) => void}
  */
  action;
  /**
   * @type {number?}
  */
  priority;
  /**
   * @type {(self:HTMLBellhopPointElement, prev:HTMLBellhopPointElement) => boolean}
  */
  condition;
  /**
   * @type {boolean}
  */
  disposable;

};

class HTMLBellhopButtonElement extends HTMLElement {

  static tag = 'bell-button';

  constructor() {

    super();

    const shadow = this.attachShadow({
      mode: 'open',
    });

    createElem({
      type: 'slot',
      parent: shadow,
    });

    this.addEventListener('click', e => {
      this.getPointNext().activate(this.getPoint());
    });

  };

  get next() {
    return this.getAttribute('next');
  };

  /**
   * @arg {string} value
  */
  set next(value) {
    if (value) {
      this.setAttribute('next', value);
    } else {
      this.removeAttribute('next');
    };
  };

  /**
   * Получить текущий коридор
  */
  getBellhop() {
    return this.getPoint().getBellhop();
  };
  /**
   * Получить расположение текущей кнопки
   * @returns {HTMLBellhopPointElement}
  */
  getPoint() {
    let elem = this;
    while (elem) {
      if (elem instanceof HTMLBellhopPointElement) return elem;
      elem = elem.parentElement;
    };
    return null;
  };
  /**
   * @returns {HTMLBellhopPointElement}
  */
  getPointNext() {
    return this.getPoint().getBellhop().querySelector(`${HTMLBellhopPointElement.tag}[name=${this.next}]`);
  };
};

customElements.define(HTMLBellhopButtonElement.tag, HTMLBellhopButtonElement);

class HTMLBellhopPointElement extends HTMLElement {

  static tag = 'bell-point';

  /**
   * @type {BellhopHandler[]}
   * @protected
  */
  _handlersActivate = [];
  /**
   * @type {BellhopHandler[]}
   * @protected
  */
  _handlersDeactivate = [];

  constructor() {

    super();

    const shadow = this.attachShadow({
      mode: 'open',
    });

    createElem({
      type: 'slot',
      parent: shadow,
    });
  };

  /**
   * @arg {HTMLBellhopPointElement} point
   * @arg {...BellhopHandler} handlers
  */
  _handle(point, ...handlers) {
    const nexts = [];
    for (const handler of handlers) {
      if (handler?.condition?.(this, point) || !handler.condition) {
        handler.action(this, point);
        if (!handler.disposable) {
          nexts.push(handler);
        };
      };
    };
    return nexts;
  };

  getName() {
    return this.getAttribute('name');
  };
  getBellhop() {
    return this.parentElement instanceof HTMLBellhopElement ? this.parentElement : this.closest('bell-hop');
  };
  getPointsNext() {
    return this.getButtonsNext().map(button => button.getPointNext());
  };
  getButtonsNext() {
    /** @type {HTMLBellhopButtonElement[]} */
    const buttons = getElems(`${HTMLBellhopButtonElement.tag}[next]`, this);
    return buttons.map(button => button.toBellhopButton());
  };

  /**
   * @arg {string} name
  */
  setName(name) {
    this.setAttribute('name', name);
    return this;
  };

  /**
   * @arg {HTMLBellhopPointElement?} prev
  */
  activate(prev) {
    this._handlersActivate = this._handle(prev, ...this._handlersActivate);
    prev.deactivate();
    this.setAttribute('active', '');
    return this;
  };
  /**
   * @arg {HTMLBellhopPointElement?} next
  */
  deactivate(next) {
    this._handlersDeactivate = this._handle(next, ...this._handlersDeactivate);
    this.removeAttribute('active');
    return this;
  };
};

customElements.define(HTMLBellhopPointElement.tag, HTMLBellhopPointElement);

class HTMLBellhopElement extends HTMLElement {

  static tag = 'bell-hop';

  static {
    createElem({
      type: 'style',
      parent: document.head,
      text: `
        ${HTMLBellhopElement.tag} {
          & {
            width: 100%;
            height: 100%;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
          }
          & ${HTMLBellhopPointElement.tag} {
            & {
              width: 100%;
              height: 100%;
              display: flex;
              flex-flow: column;
              align-items: center;
              justify-content: center;
            }
            &[active] {
              & > bell-point {
                display: none;
              }
            }
            &:not([active], :has([active])) {
              display: none;
            }
            &:not([active]):has([active]) {
              & > :not(${HTMLBellhopPointElement.tag}) {
                display: none;
              }
            }
          }
        }
      `,
    });
  };

  constructor() {

    super();

    const shadow = this.attachShadow({
      mode: 'open',
    });

    createElem({
      type: 'slot',
      parent: shadow,
    });
  };

  /**
   * @arg {string} name
  */
  to(name) {

    const path = this.getPathTo(this.getPointByName(name));



    return this;
  };

  /**
   * Возвращает пункт по его имени
   * @arg {string} name
   * @returns {BellhopPoint?}
  */
  getPointByName(name) {
    return getElem(`bell-point[name=${name}]`)?.toBellhopPoint?.() ?? null;
  };
  /**
   * Возвращает пункт по его индексу
   * @arg {number} index
   * @returns {BellhopPoint?}
  */
  getPointByIndex(index) {
    return this.getPoints()[index] ?? null;
  };
  /**
   * Возвращает активный пункт
   * @returns {HTMLBellhopPointElement?}
  */
  getPointActive() {
    return getElem(`${HTMLBellhopPointElement.tag}[active]`, this) ?? null;
  };
  /**
   * Вернуть корневой пункт коридора
   * Может быть не определён и вернет `null`
   * @returns {BellhopPoint?}
  */
  getPointRoot() {
    return getElem(`${HTMLBellhopPointElement.tag}[root]`, this._elem)?.toBellhopPoint?.() ?? null;
  };
  /**
   * Возвращает список всех пунктов
   * @returns {BellhopPoint[]?}
  */
  getPoints() {
    return getElems('bell-point', this._elem)?.map?.(point => point.toBellhopPoint()) ?? null;
  };
  /**
   * @arg {string} name
  */
  getPath(name) {
    return this.getPaths().find(path => path.at(-1).getName() === name);
  };
  /**
   * @arg {HTMLBellhopPointElement} to
   * @arg {HTMLBellhopPointElement?} from
   */
  getPathTo(to, from = this.getPointActive()) {
    const pathTo = this.getPath(to.getName());

    if (pathTo.find(point => point.getName() === from.getName())) return pathTo;

    const pathFrom = this.getPath(from.getName());

    const pointAdjacent = pathFrom.reverse().find(point => pathTo.includes(point));

    if (!pointAdjacent) return null;

    const indexPointAdjacentInTo = pathTo.indexOf(pointAdjacent);
    const indexPointAdjacentInFrom = pathFrom.indexOf(pointAdjacent);

    return [...pathFrom.reverse(0, -indexPointAdjacentInFrom), ...pathTo(1, indexPointAdjacentInTo)];

  };
  /**
   * Получить все возможные пути из указанного пункта
   * @arg {HTMLBellhopPointElement?} root
  */
  getPaths(root = this.getPointRoot() ?? this.getPointActive() ?? []) {

    const paths = [];
    const pathsNext = root.getPointsNext().map(point => [root, point]) ?? [];

    while (pathsNext.length) {
      
      const path = pathsNext.pop();

      /** @type {HTMLBellhopPointElement} */
      const lastpoint = path.at(-1);
      const points = lastpoint.getPointsNext();

      for (const point of points) {
        if (path.map(point => point.getName()).includes(point.getName())) {
          paths.push(path);
          continue;
        };
        const pathNew = [...path, point];
        pathsNext.push(pathNew);
      };
    };

    return paths;
  };

  /**
   * Деактивирует активный пункт
  */
  deactivate() {
    this.getPointActive().deactivate();
    return this;
  };

};

customElements.define(HTMLBellhopElement.tag, HTMLBellhopElement);
