import { useMemo, useState } from "react";
import "./App.css";
import { MistralClient } from "@ai-utils/mistral";

const client = new MistralClient(import.meta.env.VITE_MISTRAL_API_KEY);

function App() {
  const [text, setText] = useState("Loading...");

  useMemo(async () => {
    const response = await client.chat({
      model: "mistral-tiny",
      messages: [{ role: "user", content: "What is the best swiss cheese?" }],
    });
    setText(response.choices[0].message.content);
  }, []);

  return (
    <>
      <h1>Mistral</h1>
      <p className="read-the-docs">{text}</p>
    </>
  );
}

export default App;
