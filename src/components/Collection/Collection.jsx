import React, { useEffect, useState } from "react";
import { Typography, Pagination } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getReleasesAction } from "../../store/actions/releases";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";

import Grid from "@mui/material/Grid";

import DetailModal from "../DetailModal";
import { setParams } from "../../store/actions/params";
import ReleaseItem from "../ReleaseItem";

import "./Results.css";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Results = ({ collection = false, collectionItems = [] }) => {
  const dispatch = useDispatch();
  const { releases: releasesList, pages } = useSelector(
    (state) => state.releases
  );
  const { page, artist, album } = useSelector((state) => state.params);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
              ? releasesList.map((item) => <ReleaseItem item={item} />)
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
      <DetailModal showModal={showModal} />
    </>
  );
};

export default Results;
