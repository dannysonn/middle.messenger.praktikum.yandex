import {isEqual} from "./isEqual";
import {renderDom} from "./renderDom";

class Route {
    constructor(pathname, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = this._blockClass;
            renderDom(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}

export default Route;