import { useState } from "react";
import SelectList from "./components/SelectList/SelectList";
import "./styles.css";

export default function App() {
  const [currentOption, setCurrentOption] = useState();

  return (
    <section>
      <SelectList
        initialValue={{
          label: "Darth Vader",
          value: 3
        }}
        onChange={(option) => {
          setCurrentOption(option);
        }}
      />
      <br />
      <pre>{JSON.stringify(currentOption, null, 2)}</pre>
    </section>
  );
}
