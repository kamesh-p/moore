import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Container, Paper } from "@mui/material";

const SellDetails = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/selling/");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", margin: "20px 0" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sell Details
        </Typography>
        {books.map((book, index) => (
          <Paper
            key={index}
            elevation={1}
            style={{ padding: "10px", margin: "10px 0" }}
          >
            <Typography variant="h6">{book.title}</Typography>
            <Typography variant="body1">
              Description: {book.description}
            </Typography>
            <Typography variant="body1">Price: {book.price}</Typography>
          </Paper>
        ))}
      </Paper>
    </Container>
  );
};

export default SellDetails;
