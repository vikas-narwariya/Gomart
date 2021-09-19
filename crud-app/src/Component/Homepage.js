import { Box, Typography, makeStyles, Card, CardActions, CardMedia, Button, CardContent } from '@material-ui/core';
import { getProduct, deleteProduct } from '../Service/api';
import react, { useState, useEffect } from 'react';
import { addToCart } from './Reducers/cartActions';
import { useSelector, useDispatch } from 'react-redux';


const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const Homepage = () => {

    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    // const classes = useStyles();

    // const { id } = product;
        
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getAllProduct();
    }, []);

    const deleteProductData = async (id) => {
        await deleteProduct(id);
        getAllProduct();
    }

    const getAllProduct = async () => {
        let response = await getProduct();
        setUsers(response.data);
    }
    
    // const addItemToCart = () => {
    //     dispatch(addToCart(id, quantity));
    //     history.push('/cart');
    // }

    return (
        
            <Card sx={{ maxWidth: 345 }}>
                {users.map((user) => (
                    <>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {user.product_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {user.product_detail}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {user.product_quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {user.product_cost}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button variant="contained" size="small" color="primary" 
        // onClick={() => addItemToCart()}
        >
            {/* <Cart /> */}
            Add to Cart</Button>
        <Button variant="contained" size="small"color="primary">Buy Now</Button>
      </CardActions>
      </>
      ))}
    </Card>
        
    )
}

export default Homepage;