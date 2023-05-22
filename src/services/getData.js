import axios from "axios";

export async function getData(date, sido) {
  const res = await axios.get(
    `https://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=${process.env.REACT_APP_KEY}&pageNo=1&numOfRows=500&apiType=JSON&std_day=${date}&gubun=${sido}`
  );
  const data = await res.data.items[0];
  const error = await res.error;

  if (error) {
    console.log("error" + error);
  }

  console.log(data);

  return data;
}
