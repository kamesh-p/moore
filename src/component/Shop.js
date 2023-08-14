import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import "./Shop.css";
import { Link } from "react-router-dom";
const Shop = ({ books, addToCart, handleAddToCartrent, rentedBooks }) => {
  const [booksState, setBooksState] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [dialog, setDialog] = useState(false);

  const handleClose = () => {
    setDialog(false);
  };

  useEffect(() => {
    setBooksState(books);
  }, [books]);
  console.log("rent-shop", rentedBooks);
  return (
    <div>
      <div className="Cart">
        {booksState.map((book, index) => (
          <Card key={index} sx={{ maxWidth: 345 }} className="Card-indiv">
            <CardActionArea className="container-about-content-detail">
              <CardMedia
                component="img"
                height="140"
                image={book.imagelink}
                alt={book.title}
              />
              <CardContent className="CardContent-details">
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  className="CardContent-title"
                >
                  {book.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <div className="btn-container-About">
              <Button
                size="small"
                color="info"
                className="Btn-ViewMore"
                onClick={() => {
                  setSelectedBook(book);
                  setDialog(true);
                }}
              >
                View More
              </Button>
              <div className="btn-shop-book">
                <Button
                  size="small"
                  variant="contained"
                  color="info"
                  className="Btn-Buy-shop"
                  onClick={() => handleAddToCartrent(book)}
                >
                  Buy
                </Button>

                <Button
                  className="Btn-Buy-rent"
                  variant="contained"
                  color="error"
                  onClick={() => handleAddToCartrent(book, true)}
                >
                  Rent
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Dialog open={dialog} onClose={handleClose}>
        <DialogTitle>Book Description</DialogTitle>
        <DialogContent>
          <DialogContentText>{selectedBook?.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Shop;
