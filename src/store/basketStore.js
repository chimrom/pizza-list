import { makeAutoObservable } from "mobx";

class BasketStore {
    pizzaBasket = [];
    totalPrice = 0;
    constructor() {
        makeAutoObservable(this);
    }
    addItem = (item) => {
        this.pizzaBasket.push(item);
    };

    deleteItem = (id) => {
        this.pizzaBasket = this.pizzaBasket.filter((el) => el.id !== id);
    };

    increment = (id) => {
        this.pizzaBasket.find((el) => {
            if (el.id === id) {
                el.amount = el.amount + 1;
            }
        });
    };

    decrement = (id) => {
        this.pizzaBasket.find((el) => {
            if (el.id === id) {
                el.amount = el.amount - 1;
            }
        });
    };
    getTotalPrice = () => {
        this.totalPrice = this.pizzaBasket.reduce(
            (total, item) => total + item.price * item.amount,
            0
        );
    };
    // @observable items = [];
    // @action
    // @action removeItem(index) {
    // 	this.items.splice(index, 1);
    // }
    // @computed get totalItems() {
    // 	return this.items.length;
    // }
    // @computed get totalPrice() {
    // 	return this.items.reduce((total, item) => total + item.price, 0);
    // }
}
const basketStore = new BasketStore();

export default basketStore;
