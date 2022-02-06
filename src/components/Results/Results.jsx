import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getReleases } from "../../services/apiService";

const Results = () => {
  const [releasesList, setReleasesList] = useState([]);

  useEffect(() => {
    fetchReleases();
  }, []);

  const fetchReleases = async () => {
    const list = await getReleases();
    console.log(list.data.results);
    setReleasesList(list.data.results);
  };

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
