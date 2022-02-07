import axios from "axios";
const baseUrl = process.env.REACT_APP_BASEURL;
const token = process.env.REACT_APP_TOKEN;

export const getReleases = async (params = { page: 1, per_page: 5 }) => {
  try {
    let queryParams = "";
    if (params.title && params.title !== "")
      queryParams += `title=${params.title}&`;
    if (params.release_title && params.release_title !== "")
      queryParams += `&release_title=${params.release_title}&`;

    queryParams += "type=release";

    let queryUrl = `${baseUrl}/database/search?`;
    queryUrl += `query={${queryParams}}&`;
    queryUrl += `page=${params.page}&per_page=${params.per_page}`;

    const config = {
      headers: {
        Authorization: `Discogs token=${token}`,
      },
    };

    const response = await axios.get(queryUrl, config);
    return response;
  } catch (error) {
    throw error;
  }
};
