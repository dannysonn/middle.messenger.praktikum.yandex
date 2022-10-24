import EventBus from "./EventBus";
import { nanoid } from 'nanoid';

export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    private _element: HTMLElement;
    private readonly _meta: { props: any };

    protected props: any;
    private eventBus;
    protected children: Record<string, Block>;

    public id: string = nanoid(8);


    constructor(propsAndChildren: any = {}) {
        const eventBus = new EventBus();
        const { props, children } = this.getPropsAndChildren(propsAndChildren);

        this.children = children;

        this._meta = {
            props,
        };

        this.props = this._makePropsProxy(props);

        this.initChild();

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    private getPropsAndChildren(propsAndChildren: any) {
        const children: any = {};
        const props: any = {};

        if (propsAndChildren) {
            Object.entries(propsAndChildren).forEach(([key, value]) => {
                if (value instanceof Block) {
                    children[key] = value;
                } else if (Array.isArray(value) && value.every((v) => v instanceof Block)) {
                    children[key] = value;
                } else {
                    props[key] = value;
                }
            });
        }

        return { props, children };
    }

    protected initChild():void {

    }

    private _registerEvents(eventBus: any) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    init(): void {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    private _componentDidMount() {
        this.componentDidMount();
    }

// Может переопределять пользователь, необязательно трогать
    componentDidMount() {}

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM)
    }

    private _componentDidUpdate(oldProps: any, newProps: any) {
        const response = this.componentDidUpdate(oldProps, newProps);

        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

// Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps?) {
        return true;
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    private _render() {
        const fragment = this.render();

        const newElement = fragment.firstElementChild as HTMLElement;

        if (this._element) {
            this._removeEvents();
            this._element.replaceWith(newElement);
        }

        this._element = newElement;

        this._addEvents();
    }

// Может переопределять пользователь, необязательно трогать
    render() {
        return new DocumentFragment();
    }

    getContent() {
        return this.element;
    }

    private _makePropsProxy(props) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];

                return typeof value === "function" ? value.bind(target) : value;
            },

            set(target, prop, value) {
                const oldProps = { ...target };
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
                return true;
            },

            deleteProperty(target, prop) {
                throw new Error("нет доступа");
            }
        });
    }

    private _createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }

    _addEvents() {
        const events = this.props.events;

        if(!events) {
            return;
        }

        Object.keys(events).forEach((eventName) => {
            this._element.addEventListener(eventName, events[eventName]);
        });
    }

    _removeEvents() {
        const events = this.props.events;

        if (!events || !this._element) {
            return;
        }

        Object.keys(events).forEach((eventName) => {
            this._element.removeEventListener(eventName, events[eventName]);
        });
    }

    compile(template: (context: any) => string, context: any) {
        const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

        Object.entries(this.children).forEach(([key, child]) => {
            if (Array.isArray(child)) {
                context[key] = child.map((ch) => `<div data-id="id-${ch.id}"></div>`).join('');

                return;
            }

            context[key] = `<div data-id="id-${child.id}"></div>`;
        });

        fragment.innerHTML = template(context);

        Object.entries(this.children).forEach(([, child]) => {
            if (Array.isArray(child)) {
                child.forEach((ch) => {
                    const stub = fragment.content.querySelector(`[data-id="id-${ch.id}"]`);

                    if (!stub) {
                        return;
                    }

                    stub.replaceWith(ch.getContent());
                });

                return;
            }
            const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);

            if (!stub) {
                return;
            }

            stub.replaceWith(child.getContent());
        });

        return fragment.content;
    }
}
