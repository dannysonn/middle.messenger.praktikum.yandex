import EventBus from "./EventBus";

type Indexed<T = any> = {
    [key in string]: T;
};

export enum StoreEvents {
    Updated = 'updated',
}

// наследуем Store от EventBus, чтобы его методы были сразу доступны у экземпляра Store
class Store extends EventBus {
    private state: Indexed = {};

    public getState() {
        return this.state;
    }

    public set(path: string, value: unknown) {
        set(this.state, path, value);

        // метод EventBus
        this.emit(StoreEvents.Updated);
    };
}

export default new Store();