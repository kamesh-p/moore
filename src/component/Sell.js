import React, { useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";
import {
  TextField,
  TextareaAutosize,
  Button,
  Container,
  Paper,
} from "@mui/material";

function Sell() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const user = useSelector((state) => state.auth.user);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const sellingData = {
      user: user,
      title: title,
      description: description,
      price: price,
    };

    try {
      await axios.post(
        "http://localhost:4000/selling/create-user",
        sellingData
      );

      console.log("Selling data sent successfully!");

      // ... handle success ...
    } catch (error) {
      console.error("Error sending selling data:", error);

      // ... handle error ...
    }

    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <Container>
      <Paper
        elevation={3}
        className="selling-page"
        style={{ width: "80%", padding: "20px", margin: "100px 200px" }}
      >
        <h2>Sell your Book</h2>

        <form className="form-field" onSubmit={handleSubmit}>
          {/* Title */}

          <TextField
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            margin="normal"
          />

          {/* Description */}

          <TextField
            rowsMin={4}
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          {/* Price */}

          <TextField
            label="Price in Rs."
            style={{ width: "100%", marginTop: "10px" }}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            margin="normal"
          />

          {/* Submit Button */}

          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "100%", marginTop: "10px" }}
          >
            Post Book
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Sell;
