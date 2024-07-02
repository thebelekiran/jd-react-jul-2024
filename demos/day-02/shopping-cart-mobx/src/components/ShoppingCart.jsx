const ShoppingCart = () => {
    const items = [];

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