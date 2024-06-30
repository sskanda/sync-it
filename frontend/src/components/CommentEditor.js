import React from "react";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import HorizontalStack from "./util/HorizontalStack";
import { Box } from "@mui/system";
const CommentEditor = ({ label }) => {
  return (
    <Card style={{ padding: "15px" }}>
      <Stack spacing={2}>
        <HorizontalStack justifyContent="space-between">
          <Typography variant="h5">Comment</Typography>
        </HorizontalStack>

        <Box component="form">
          <TextField
            multiline
            fullWidth
            label={label}
            rows={5}
            required
            name="content"
            sx={{
              backgroundColor: "white",
            }}
          />

          <Button
            variant="outlined"
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "white",
              mt: 2,
            }}
          >
            <div>Submit</div>
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default CommentEditor;
