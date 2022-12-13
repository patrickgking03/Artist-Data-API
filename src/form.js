import { useState } from "react";
export default function Form({ setName }) {
  const [content, setContent] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setName(content);
        }}
      >
        Search
      </button>
    </div>
  );
}
