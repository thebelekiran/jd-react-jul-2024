import { makeAutoObservable } from "mobx";

class ShoppingCart{
    items = [];

    constructor() {
        makeAutoObservable(this);
    }

    addToCart(item){
        this.items.push(item)
    }
}

const shoppingCart = new ShoppingCart();

export default ShoppingCart;