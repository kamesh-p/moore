import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Button, Container } from "@mui/material";
import "./About.css";
import styled from "@emotion/styled";
import { Paper, Grid, Box } from "@mui/material";
import Slider from "react-slick";
export default function About({ name }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Adjust the interval (in milliseconds) between slides
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const books = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUutsti4IUZIzrbZWtMWTdPKHekpN6DUZvA&usqp=CAU",
      title: "Rich Dad Poor Dad",
      description:
        "Rich Dad Poor Dad is a personal finance book written by Robert T. Kiyosaki. The book was first published in 1997",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mRxqmY47JWQlD3q9tDEeaEXoExqBwPSsGA&usqp=CAU",
      title:
        "The Millionaire Next Door: The Surprising Secrets of America's Wealthy",
      description:
        "Although not directly related to Rich Dad Poor Dad,this book shares a similar theme of financial wisdom and wealth-building.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWAbs8uKXkFJYHS78AgMYqEFzyalnffT74Q&usqp=CAU",
      title: "Cashflow Quadrant: Rich Dad's Guide to Financial Freedom",
      description:
        "In this book, Robert T. Kiyosaki expands on the concepts introduced in Rich Dad Poor Dad by introducing the Cashflow Quadrant",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWAbs8uKXkFJYHS78AgMYqEFzyalnffT74Q&usqp=CAU",
      title: "Cashflow Quadrant: Rich Dad's Guide to Financial Freedom",
      description:
        "In this book, Robert T. Kiyosaki expands on the concepts introduced in Rich Dad Poor Dad by introducing the Cashflow Quadrant",
    },
    // {
    //   img: "https://example.com/book4-image.jpg",
    //   title: "Book 4 Title",
    //   description: "Description of Book 4",
    // },
  ];

  return (
    <div>
      <Container maxWidth="md" className="root">
        <div className="container-intro">
          <div className="container-content">
            <Typography variant="h5" className="title" gutterBottom>
              Welcome {name},
            </Typography>
            <Typography variant="h6" className="subtitle" gutterBottom>
              Welcome to our Moore Market E-commerce Website, your one-stop
              destination for finding pre-loved literary treasures. Our platform
              is dedicated to connecting book lovers with a vast selection of
              quality used books, each with its own unique history and charm.
            </Typography>
            <Button variant="outlined" size="large" className="ctaButton">
              Get Started
            </Button>
          </div>
          <div></div>
        </div>
      </Container>
      <Typography variant="h5" component="h6" className="Favarite-title">
        {name} Favorite Books
      </Typography>
      <div className="Cart">
        {books.map((book, index) => (
          <Card key={index} sx={{ maxWidth: 345 }} className="Card-indiv">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={book.img}
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
                <Typography variant="body2" color="text.secondary">
                  {book.description}
                </Typography>
              </CardContent>
              <div className="btn-container">
                <Button
                  size="small"
                  variant="contained"
                  color="info"
                  className="Btn-Add"
                  component="div"
                >
                  Buy
                </Button>
              </div>
              {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions> */}
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}
