import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import Form from "./Form.js";
import Information from "./Information.js";

export default function App() {
  const [artist, setArtist] = useState("");
  const [data, setData] = useState("");

  //
  useEffect(() => {
    const url = `https://musicbrainz.org/ws/2/work?query=${artist}&fmt=json`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(null));
  }, [artist]);

  return (
    <div className="App">
      <Title text="Artist Data" />
      <img
        src="https://cdn.shortpixel.ai/spai/w_950+q_lossy+ret_img+to_webp/https://toplistin.com/wp-content/uploads/2020/01/best-selling-music-artist.jpg"
        alt="Musical Artist"
        width="350"
      />
      <Form setName={setArtist} />
      <Information data={data} />
      <body>Fun Fact: Ed Sheeran is the biggest musical artist in 2022!</body>
    </div>
  );
}
