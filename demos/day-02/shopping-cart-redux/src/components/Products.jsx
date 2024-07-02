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
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    products.map(
                        p => (
                            <Fragment key={p.name}>
                                <ListItem>
                                    <ListItemText primary={p.name} secondary={
                                        <>
                                            {p.address.city}
                                        </>
                                    }></ListItemText>
                                </ListItem>

                                <div>{p.name}</div>

                            </Fragment>
                        )
                    )
                }
            </List>
        </>
    );
}



export default Products;

