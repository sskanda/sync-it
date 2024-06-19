import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";
import "./PostEditor.css";
const PostEditor = () => {
  return (
    <Card className="post_editor_card">
      <Stack spacing={1}>
        <HorizontalStack spacing={2}>
          <UserAvatar width={50} height={50} />
          <Typography variant="h5">
            What would you like to post today ?
          </Typography>
        </HorizontalStack>

        <Box component="form">
          <TextField
            fullWidth
            label="Title"
            required
            name="title"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Content"
            multiline
            rows={10}
            name="content"
            margin="normal"
          />

          <Button
            variant="outlined"
            type="submit"
            fullWidth
            sx={{
              mt: 2,
            }}
          >
            <>Submit</>
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default PostEditor;
