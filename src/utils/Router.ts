import Route from './route';
import Block from './Block';

export default class Router {
  routes: Route[];

  history: History;

  private _currentRoute: Route | null;

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  use(pathname: string, block: Block, props: any) {
    const route = new Route(pathname, block, props);
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = ((event) => {
      this._onRoute(event.currentTarget?.location.pathname);
    });

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }
    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
