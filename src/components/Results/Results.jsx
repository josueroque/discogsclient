import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReleasesAction } from "../../store/actions/releases";

const Results = () => {
  const dispatch = useDispatch();
  const releasesList = useSelector((state) => state.releases.releases);

  useEffect(() => {
    dispatch(getReleasesAction());
  }, [dispatch]);

  return (
    <div>
      <Typography variant='h4'> Results</Typography>
      {releasesList && releasesList.length > 0
        ? releasesList.map((item) => <div> {item.title}</div>)
        : null}
    </div>
  );
};

export default Results;
