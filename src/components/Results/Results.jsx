import React, { useEffect, useState } from "react";
import { Typography, Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getReleasesAction } from "../../store/actions/releases";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Results = () => {
  const dispatch = useDispatch();
  const releasesList = useSelector((state) => state.releases.releases);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleChange = (_, value) => {
    setLoading(true);
    setPage(value);
  };

  useEffect(() => {
    dispatch(
      getReleasesAction({ page, per_page: 5, release_title: "nevermind" })
    );
  }, [dispatch, page]);

  useEffect(() => {
    setLoading(false);
  }, [releasesList]);

  return (
    <>
      <Grid item xs={12} md={6} style={{ margin: "0 auto" }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant='h5' component='div'>
          Search Results
        </Typography>
        <Demo>
          <List dense={false}>
            {releasesList && releasesList.length > 0
              ? releasesList.map((item) => (
                  <ListItem
                    secondaryAction={
                      <IconButton edge='end' aria-label='delete'>
                        <AddIcon />
                      </IconButton>
                    }
                    key={item.id}
                  >
                    <ListItemAvatar>
                      <Avatar src={item.thumb}></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={"Secondary text"}
                    />
                  </ListItem>
                ))
              : null}
          </List>
        </Demo>
      </Grid>
      <div
        style={{
          marginTop: releasesList && releasesList.length > 0 ? "0vh" : "40vh",
        }}
      >
        <Grid item xs={12} md={6} style={{ margin: "0 auto" }}>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Grid>
      </div>
    </>
  );
};

export default Results;
