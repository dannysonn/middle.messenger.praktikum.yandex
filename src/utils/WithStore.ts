import Block from './Block';
import store, { StoreEvents } from './Store';
import isEqual from './isEqual';

export const withStore = (
  mapStateToProps: (state: Record<string, unknown>) => Record<string, unknown>,
) => (Component: typeof Block) => {
  let state: Record<string, unknown>;
  return class extends Component {
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
