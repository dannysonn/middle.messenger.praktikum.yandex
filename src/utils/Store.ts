import EventBus from './EventBus';
import { isEqual } from './isEqual';
import { set } from './Set';
import Block from './Block';

export type Indexed<T = any> = {
  [key in string]: T;
};

export enum StoreEvents {
  Updated = 'updated',
}

export class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

const store = new Store();

export const withStore = (
  mapStateToProps: (state: Record<string, unknown>) => Record<string, unknown>,
) => (Component: typeof Block) => {
  let state: Record<string, unknown>;
  return class extends Component<Record<string, any>> {
    constructor(props: any) {
      state = mapStateToProps(store.getState());
      super({ ...props, ...state });

      store.on(StoreEvents.Updated, () => {
        const newState = mapStateToProps(store.getState());
        if (!isEqual(state, newState)) {
          this.setProps({ ...newState });
          state = newState;
        }
      });
    }
  };
};

export { store };
