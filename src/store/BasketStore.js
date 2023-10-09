import { observable, action, computed } from "mobx";

class BasketStore {
    @observable items = [];

    @action addItem(item) {
        this.items.push(item);
    }

    @action removeItem(index) {
        this.items.splice(index, 1);
    }

    @computed get totalItems() {
        return this.items.length;
    }

    @computed get totalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

const basketStore = new BasketStore();
export default basketStore;
