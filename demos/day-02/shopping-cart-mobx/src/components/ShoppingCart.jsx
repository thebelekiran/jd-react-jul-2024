import { observer } from 'mobx-react';
import shoppingCart from '../stores/ShoppingCart';

const ShoppingCart = () => {
    const items = shoppingCart.items;

    return (
        <>
            <div>Shopping Cart</div>
            {
                items.map(
                    cartItem => (
                        <div key={cartItem.id}>{cartItem.name}</div>
                    )
                )
            }
        </>
    );
}

export default observer(ShoppingCart);