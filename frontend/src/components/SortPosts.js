import React from "react";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import HorizontalStack from "./util/HorizontalStack";

const SortPosts = ({ onSortBy, sortBy, sorts }) => {
  console.log("uess");
  console.log(sorts);
  return (
    <HorizontalStack spacing={1}>
      <Typography
        color="text.secondary"
        variant="subtitle2"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        Sort by:
      </Typography>
      <Select size="small" value={sorts[sortBy]}>
        {Object.keys(sorts).map((sortName, i) => (
          <MenuItem value={sorts[sortName]} key={i}>
            {sorts[sortName]}
          </MenuItem>
        ))}
      </Select>
    </HorizontalStack>
  );
};

export default SortPosts;
