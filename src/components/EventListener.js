import { useState } from "react";
import useEventListener from "../utils//useEventListener";
import CircularProgressBar from "./CircularProgressBar";

export default function EventListener({ showMeter }) {
  const [key, setKey] = useState("e");
<<<<<<< HEAD
  let percentage = (1115 / 5000) * 100;
=======
  let percentage = (900 / 5000) * 100;
>>>>>>> 13be3bb34da40fd194f5826e724b90e7307cba55

  useEventListener("keydown", e => {
    if (e.key.toLowerCase() === "m" || e.key.toLowerCase() === "e")
      setKey(e.key);
  });

  if (key.toLowerCase() === "m" || showMeter) {
    return (
      <CircularProgressBar
        strokeWidth="30"
        sq_Size="230"
        percentage={percentage}
      />
    );
  } else if (key.toLowerCase() === "e" || showMeter) {
    return <></>;
  }
}
