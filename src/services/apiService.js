import axios from "axios";
const baseUrl = process.env.REACT_APP_BASEURL;
const token = process.env.REACT_APP_TOKEN;

export const getReleases = async (params = {}) => {
  try {
    console.log(baseUrl);
    console.log(token);
    console.log(process.env);

    const queryUrl = `${baseUrl}/database/search?token=${token}`;
    const config = {
      headers: {
        token,
      },
    };

    const response = await axios.get(queryUrl);
    console.log(response);
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
