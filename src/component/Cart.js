import React, { useState } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  TextField,
  DialogContentText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { RadioGroup, Radio, FormControlLabel, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Cart.css";
import { useSelector } from "react-redux";

const Cart = ({ cartItems }) => {
  const [cart, setCart] = useState(cartItems);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [paymentType, setPaymentType] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const user = useSelector((state) => state.auth.user);

  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const getTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const getTotalCartPrice = () => {
    const totalPrice = cart.reduce(
      (accumulator, item) => accumulator + getTotalPrice(item),
      0
    );
    return totalPrice;
  };

  const handlePlaceOrder = () => {
    if (isAuthenticated) {
      const order = {
        name: name,
        address: address,
        userd: { user },
        paymentType,
        items: cart.map((item) => ({
          name: item.title,
          quantity: item.quantity,
          price: item.price,
        })),
      };
      setOrderDetails(order);
      setDialogOpen(true);
    }
  };
  console.log("order:", orders);
  const HandleConfirmation = () => {
    setConfirmation(true);
    setDialogOpen(false);

    setOrders((prevOrders) => [...prevOrders, orderDetails]);

    setOrderDetails({});
  };
  const HandleCloseConfirmation = () => {
    setConfirmation(false);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // console.log("order", orders);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log("cart", isAuthenticated);
  return (
    <div className="cart-container-Cart">
      {cart.map((item, index) => (
        <div className="grid-cart-item-List" key={index}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={3}>
              <img
                src={item.imagelink}
                alt={item.title}
                style={{ width: "100px", height: "100px", borderRadius: "4px" }}
              />
            </Grid>
            <Grid item xs={4}>
              {item.title}
            </Grid>
            <Grid item xs={2}>
              <IconButton
                aria-label="Decrease Quantity"
                onClick={() => handleDecreaseQuantity(index)}
                color="error"
              >
                <RemoveIcon />
              </IconButton>
              <span>{item.quantity}</span>
              <IconButton
                aria-label="Increase Quantity"
                onClick={() => handleIncreaseQuantity(index)}
                color="success"
              >
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              ₹{getTotalPrice(item)}
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleRemoveItem(index)}
              >
                <DeleteIcon />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </Grid>
        </div>
      ))}
      <div className="Cart-price-order">
        <Typography variant="h6" component="h3" gutterBottom>
          Total Price: ₹{getTotalCartPrice()}
        </Typography>
        {isAuthenticated ? (
          <Button
            className="Cart-price-orde-btn"
            variant="contained"
            color="success"
            size="small"
            onClick={handlePlaceOrder}
          >
            Place order
          </Button>
        ) : (
          <Link to="/Login">
            <Button
              className="Cart-price-orde-btn"
              variant="contained"
              color="error"
              size="medium"
            >
              Login
            </Button>
          </Link>
        )}
      </div>
      {dialogOpen && isAuthenticated && (
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Order Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your address here. We
              will send updates occasionally.
            </DialogContentText>
            <br></br>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="name"
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Address"
              type="Address"
              multiline
              fullWidth
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="cart-container-Cart">
              <Grid container spacing={2}>
                {cartItems.map((item) => (
                  <Grid item xs={6} key={item.id}>
                    <Paper
                      sx={{ padding: 2 }}
                      className="Book-list-details-paper"
                    >
                      <Typography variant="subtitle1">{item.name}</Typography>
                      <Typography variant="body2">
                        Quantity: {item.quantity} | Price: ${item.price} |
                        total: ₹{getTotalCartPrice()}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </div>

            <RadioGroup
              className="radio-list"
              name="paymentType"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
            >
              <br />
              <Grid spacing={2}>
                <FormControlLabel
                  value="creditCard"
                  control={<Radio />}
                  label="Credit Card"
                />
                <FormControlLabel
                  value="paypal"
                  control={<Radio />}
                  label="PayPal"
                />
                <FormControlLabel
                  value="Cash On Delivery"
                  control={<Radio />}
                  label="Cash On Delivery"
                />
              </Grid>
            </RadioGroup>
            <br />
            <Paper sx={{ padding: 2, marginBottom: 2 }}>
              <Typography variant="subtitle1">
                Order Total: ₹{getTotalCartPrice()}
              </Typography>
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button
              // variant="outlined"
              color="success"
              onClick={HandleConfirmation}
            >
              Order
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {/* Order confirmation dialog */}
      {confirmation && (
        <Dialog open={confirmation} onClose={HandleCloseConfirmation}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to place the order?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={HandleCloseConfirmation}>Cancel</Button>
            <Button color="success" onClick={HandleCloseConfirmation}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Cart;
