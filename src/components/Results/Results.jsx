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
import { setParams } from "../../store/actions/params";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Results = () => {
  const dispatch = useDispatch();
  const { releases: releasesList, pages } = useSelector(
    (state) => state.releases
  );
  const { page, artist, album } = useSelector((state) => state.params);
  const [loading, setLoading] = useState(false);

  const handleChange = (_, value) => {
    setLoading(true);
    dispatch(
      setParams({
        page: value,
        per_page: 5,
        release_title: album,
        title: artist,
      })
    );
  };

  useEffect(() => {
    dispatch(
      getReleasesAction({
        page: page,
        per_page: 5,
        release_title: album,
        title: artist,
      })
    );
  }, [page, artist, album, dispatch]);

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
                      secondary={`${item.style ? item.style : ""}`}
                    />
                  </ListItem>
                ))
              : null}
          </List>
        </Demo>
        <div>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              position: "absolute",
              margin: "0 auto",
              top: 520,
            }}
          >
            <Pagination
              count={pages ? pages : 0}
              page={page}
              onChange={handleChange}
            />
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default Results;
