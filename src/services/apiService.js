import axios from "axios";
const baseUrl = process.env.REACT_APP_BASEURL;
const token = process.env.REACT_APP_TOKEN;

export const getReleases = async (params = { page: 1, per_page: 5 }) => {
  try {
    console.log(params);
    let queryUrl = `${baseUrl}/database/search?page=${params.page}&per_page=${params.per_page}`;
    if (params.title) queryUrl += `&q={title=${params.title}}`;
    if (params.release_title) queryUrl += `&q={title=${params.release_title}}`;

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

export async function saveMember(member) {
  try {
    let queryUrl = `${baseUrl}/api/members`;

    const config = {
      headers: {
        token,
      },
    };

    const response = await axios.post(queryUrl, config);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
