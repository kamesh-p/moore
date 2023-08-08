import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const Shop = ({ books, addToCart }) => {
  const [booksState, setBooksState] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  useEffect(() => {
    setBooksState(books);
  }, [books]);
  const handleAddToCart = (book) => {
    setBooksState((prevBooks) =>
      prevBooks.map((prevBook) =>
        prevBook.id === book.id
          ? { ...prevBook, selected: !prevBook.selected }
          : prevBook
      )
    );

    addToCart(book);
  };
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
                {/* <Typography variant="body2" color="text.secondary">
                  {book.description}
                </Typography> */}
              </CardContent>
            </CardActionArea>
            <div className="btn-container-About">
              <Button
                size="small"
                color="info"
                className="Btn-ViewMore"
                onClick={() => setSelectedBook(book)}
              >
                View More
              </Button>
              <Button
                size="small"
                variant="contained"
                color="info"
                className="Btn-Buy"
                onClick={() => handleAddToCart(book)}
              >
                Buy
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
