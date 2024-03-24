import axios from 'axios';

export default async function getVariousMetrics() {
  try {
    const response = await axios.get('/sp-api/spr_Funnel/2024-02-01%2000:00:00&2024-02-29%2000:00:00')
    return response.data.recordset;
  } catch (error) {
    console.error(error);
    return [];
  }
}