import { useEffect, useState } from "react";
import { getWorkshops } from "../services/workshops";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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

    console.log(products);

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    products.length !== 0 && products.map(
                        p => (
                                <ListItem key={p.name} >
                                    <ListItemText primary={p.name} secondary={
                                        <>
                                            {p.location.city}
                                            <IconButton color="primary" aria-label="add to shopping cart" onClick={ () => dispatch( addToCart({ item: p }) )}>
                                                <ShoppingCartIcon />
                                            </IconButton>
                                        </>
                                    }></ListItemText>
                                   
                                </ListItem>
                        )
                    )
                }
            </List>
        </>
    );
}
 
export default Products;