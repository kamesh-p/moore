import React, { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";

import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import Footer from "./Footer";
import "./About.css";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = ({ addToCart, cartItems, books, handleAddToCartrent }) => {
  const [booksState, setBooksState] = useState([]);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [selectedBook, setSelectedBook] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [preference, setprederence] = useState([]);

  const isLoading = books.length === 0;

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/genre/");
      setprederence(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  console.log("pre", preference);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const bookInfo = {
    language: "English",
    education: "Engineering",
    genre: "fictional",
  };

  const educationBooks = booksState.filter(
    (book) => book.classification === bookInfo.education
  );

  // Filter books based on genre matching the genre property
  const genreBooks = booksState.filter(
    (book) => book.classification === bookInfo.genre
  );

  // Filter books based on language matching the language property
  const languageBooks = booksState.filter(
    (book) => book.language === bookInfo.language
  );
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  let Loginname = "Viewers";

  if (isAuthenticated && user) {
    console.log("Logged in user's name:", user.Name);
    Loginname = user.Users.name;
  }
  useEffect(() => {
    setBooksState(books);
  }, [books]);
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const settingss = {
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  console.log("app", cartItems);
  console.log("bookstate", booksState);
  const fictionalBooks = booksState.filter(
    (book) => book.classification === "fictional"
  );

  return (
    <div>
      <Container maxWidth="md" className="root">
        <div className="container-intro">
          <div className="container-content">
            <Typography variant="h6" className="title" gutterBottom>
              Welcome {Loginname},
            </Typography>
            <Typography variant="h6" className="subtitle" gutterBottom>
              Welcome to our Moore Market E-commerce Website, your one-stop
              destination for finding pre-loved literary treasures. Our platform
              is dedicated to connecting book lovers with a vast selection of
              quality used books, each with its own unique history and charm.
            </Typography>
          </div>
        </div>
      </Container>
      <div className="item-features">
        <Typography className="item-features-text" variant="h5">
          Features Available
        </Typography>
        <Slider {...settings}>
          <div>
            <Item id="Item-container1" className="Item-container">
              <div className="Item-container-content">
                <img
                  src="data:image/png;base64,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"
                  alt="s"
                  className="img-item-container"
                />
                Books are the keys to wisdom's treasure trove, so invest in them
                and watch your knowledge grow.
              </div>
              <div>
                <Button
                  className="Item-container-btn"
                  color="success"
                  size="medium"
                  variant="contained"
                  href="/Buy"
                >
                  Buy
                </Button>
              </div>
            </Item>
          </div>
          <div>
            <Item id="Item-container2" className="Item-container">
              <div className="Item-container-content">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJJl-p9S5aPwUqVTeoX7igrxJzqvcMlw6Ow&usqp=CAU"
                  alt="s"
                  className="img-item-container"
                />
                "Unlock the wisdom within these pages, and share its magic with
                a new owner. Own your knowledge, sell your book
              </div>
              <div>
                <Button
                  className="Item-container-btn"
                  color="error"
                  size="medium"
                  variant="contained"
                  href="/Sell"
                >
                  Sell
                </Button>
              </div>
            </Item>
          </div>
          <div>
            <Item id="Item-container3" className="Item-container">
              <div className="Item-container-content">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjad3BqRwwfHUCgmJyicipj60db7gmWUas_YIFpzaUFZ0LO38T4p2dihWt3Nc2BkOxwP0&usqp=CAU"
                  alt="s"
                  className="img-item-container"
                />
                "Embark on an adventure without owning it forever. Rent a book,
                discover new worlds, and return it enriched."
              </div>
              <div>
                <Button
                  className="Item-container-btn"
                  color="info"
                  size="medium"
                  variant="contained"
                  href="/Library"
                >
                  Rent
                </Button>
              </div>
            </Item>
          </div>
          <div>
            <Item id="Item-container4" className="Item-container">
              <div className="Item-container-content">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnN-iMCom3ENlbqJYFpz7YZDTzr4PvMCpVV4aU6k9omzxyu6bjvBLeOM8aR09aJWvAzFU&usqp=CAU"
                  alt="s"
                  className="img-item-container"
                />
                "Cash on Delivery: Pay with ease when your literary treasures
                arrive at your door. Discover the joy of reading without any
                hassle!"
              </div>
              <div>
                <Button
                  className="Item-container-btn"
                  color="secondary"
                  size="medium"
                  variant="contained"
                >
                  Cash
                </Button>
              </div>
            </Item>
          </div>
        </Slider>
      </div>

      <Typography variant="h5" component="h6" className="Favarite-title">
        {Loginname} Genre Perference Books
      </Typography>
      <div className="Cart">
        {genreBooks.map((book, index) => (
          <div className="container-fav-list">
            <div className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="Img-AbouT">
                    <img
                      className="img-book-fav"
                      src={book.imagelink}
                      alt="img"
                    ></img>
                  </div>
                </div>
              </div>

              <div className="slide slide2">
                <div className="content">
                  <div className="content-display-contex">
                    <p>{book.title}</p>
                  </div>
                  <div>
                    <Button
                      size="small"
                      color="info"
                      className="Btn-ViewMore-fav"
                      onClick={() => {
                        setSelectedBook(book);
                        handleOpenDialog();
                      }}
                    >
                      View More
                    </Button>
                    <div className="display-button-row">
                      <Button
                        size="small"
                        variant="contained"
                        color="info"
                        className="Btn-Buy-fav"
                        onClick={() => handleAddToCartrent(book)}
                      >
                        Buy
                      </Button>
                      <Button
                        className="Btn-Buy-rent-about"
                        variant="contained"
                        color="error"
                        onClick={() => handleAddToCartrent(book, true)}
                      >
                        Rent
                      </Button>
                    </div>
                    <Dialog
                      open={openDialog}
                      onClose={handleCloseDialog}
                      maxWidth="md"
                    >
                      <DialogTitle>Book Description</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          {selectedBook?.description}
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Typography variant="h5" component="h6" className="Favarite-title">
        {Loginname} Language Perference Books
      </Typography>
      <div className="Cart">
        {languageBooks.map((book, index) => (
          <div className="container-fav-list">
            <div className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="Img-AbouT">
                    <img
                      className="img-book-fav"
                      src={book.imagelink}
                      alt="img"
                    ></img>
                  </div>
                </div>
              </div>

              <div className="slide slide2">
                <div className="content">
                  <div className="content-display-contex">
                    <p>{book.title}</p>
                  </div>
                  <div>
                    <Button
                      size="small"
                      color="info"
                      className="Btn-ViewMore-fav"
                      onClick={() => {
                        setSelectedBook(book);
                        handleOpenDialog();
                      }}
                    >
                      View More
                    </Button>
                    <div className="display-button-row">
                      <Button
                        size="small"
                        variant="contained"
                        color="info"
                        className="Btn-Buy-fav"
                        onClick={() => handleAddToCartrent(book)}
                      >
                        Buy
                      </Button>
                      <Button
                        className="Btn-Buy-rent-about"
                        variant="contained"
                        color="error"
                        onClick={() => handleAddToCartrent(book, true)}
                      >
                        Rent
                      </Button>
                    </div>
                    <Dialog
                      open={openDialog}
                      onClose={handleCloseDialog}
                      maxWidth="md"
                    >
                      <DialogTitle>Book Description</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          {selectedBook?.description}
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Typography variant="h5" component="h6" className="Favarite-title">
        {Loginname} Educational Books
      </Typography>
      <div className="Cart">
        {educationBooks.map((book, index) => (
          <div className="container-fav-list">
            <div className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="Img-AbouT">
                    <img
                      className="img-book-fav"
                      src={book.imagelink}
                      alt="img"
                    ></img>
                  </div>
                </div>
              </div>

              <div className="slide slide2">
                <div className="content">
                  <div className="content-display-contex">
                    <p>{book.title}</p>
                  </div>
                  <div>
                    <Button
                      size="small"
                      color="info"
                      className="Btn-ViewMore-fav"
                      onClick={() => {
                        setSelectedBook(book);
                        handleOpenDialog();
                      }}
                    >
                      View More
                    </Button>
                    <div className="display-button-row">
                      <Button
                        size="small"
                        variant="contained"
                        color="info"
                        className="Btn-Buy-fav"
                        onClick={() => handleAddToCartrent(book)}
                      >
                        Buy
                      </Button>
                      <Button
                        className="Btn-Buy-rent-about"
                        variant="contained"
                        color="error"
                        onClick={() => handleAddToCartrent(book, true)}
                      >
                        Rent
                      </Button>
                    </div>
                    <Dialog
                      open={openDialog}
                      onClose={handleCloseDialog}
                      maxWidth="md"
                    >
                      <DialogTitle>Book Description</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          {selectedBook?.description}
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default About;
