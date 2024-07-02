import { Fragment, useState, useEffect } from 'react';
import { getWorkshops } from "../services/workshops";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            async function helper() {
                const data = await getWorkshops();
                setProducts(data);
            }

            helper();
        },
        []
    );

    return (
        <>
            {
                products.map(
                    p => (
                        <Fragment key={p.name}>
                            <div>{p.name}</div>
                            <buttton>Add to cart</buttton>
                        </Fragment>
                    )
                )
            }
        </>
    );
}

export default Products;

