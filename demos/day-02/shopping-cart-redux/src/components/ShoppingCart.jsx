import { useSelector } from 'react-redux';

const ShoppingCart = () => {
    const items = useSelector((state) => state.cart.items);

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

export default ShoppingCart;