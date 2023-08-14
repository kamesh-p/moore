import React from "react";
import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const ButtonPage = () => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="contained"> contained</Button>
        <Button variant="text">text</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
      </Stack>
      <Stack spacing={2} display="block">
        <Button size="small" variant="contained" color="error">
          Small
        </Button>
        <Button size="medium" variant="contained" color="error">
          medium
        </Button>
        <Button size="large" variant="contained" color="error">
          Large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<SendIcon />}>
          click
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          click
        </Button>
        <IconButton aria-label="send" color="success">
          <SendIcon />
        </IconButton>
      </Stack>
    </div>
  );
};

export default ButtonPage;
