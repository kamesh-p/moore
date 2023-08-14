import React, { useState, useEffect } from "react";

import axios from "axios";

import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function AdminDashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of books from the server when the component mounts

    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/library/");

      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <Container>
      <Paper
        elevation={3}
        style={{ padding: "20px", margin: "100px auto", width: "80%" }}
      >
        <Typography variant="h4" gutterBottom>
          requested Rented books
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>

                <TableCell>Description</TableCell>

                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {books.map((book) => (
                <TableRow key={book._id}>
                  <TableCell>{book.title}</TableCell>

                  <TableCell>{book.description}</TableCell>

                  <TableCell>{book.price} Rs.</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default AdminDashboard;
