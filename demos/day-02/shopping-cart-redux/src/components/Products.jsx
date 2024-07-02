import { Fragment, useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { getWorkshops } from "../services/workshops";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const Products = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

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
                                                    dispatch(
                                                        addToCart(
                                                            {
                                                                item: p
                                                            }
                                                        )
                                                    );
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

