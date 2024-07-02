import { Fragment, useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText } from '@mui/material';
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
                                            {p.location.city}
                                            <Button
                                                variant="outlined"
                                                onClick={() => {

                                                }}
                                            >
                                                Add to cart
                                            </Button>
                                        </>
                                    }></ListItemText>
                                </ListItem>
                            </Fragment>
                        )
                    )
                }
            </List >
        </>
    );
}



export default Products;

