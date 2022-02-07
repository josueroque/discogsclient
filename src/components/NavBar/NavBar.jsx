import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { setParamsAction } from "../../store/actions/params";
import { useDispatch } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavBar() {
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState("");
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            align='right'
            margin={2}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Search by
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Artist'
              InputProps={{
                "aria-label": "search",
                endAdornment: (
                  <InputAdornment position='end'>
                    <CancelIcon />
                  </InputAdornment>
                ),
              }}
              disableClearable
              onChange={(event) => {
                setArtist(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  dispatch(
                    setParamsAction({
                      page: 1,
                      per_page: 5,
                      title: artist,
                      release_title: album,
                    })
                  );
                }
              }}
            />
          </Search>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Album'
              inputProps={{ "aria-label": "search" }}
              value={album}
              onChange={(event) => {
                setAlbum(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  dispatch(
                    setParamsAction({
                      page: 1,
                      per_page: 5,
                      title: artist,
                      release_title: album,
                    })
                  );
                }
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
