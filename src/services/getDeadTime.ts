import axios from 'axios';

export default async function getDeadTime() {
  try {
    const response = await axios.get('/sp-api/spr_TopXVesselsDeadTime/15')
    return response.data.recordset;
  } catch (error) {
    console.error(error);
    return [];
  }
}