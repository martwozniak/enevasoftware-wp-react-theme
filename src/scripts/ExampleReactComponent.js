import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

function ExampleReactComponent() {
  const [clickCount, setClickCount] = useState(0);

  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { duration: 0.1, y: "-10px" });
  });

  return (
    <div
      className="example-react-component"
      onClick={() => setClickCount((prev) => prev + 1)}
      ref={boxRef}
    >
      <h1>Hello from React!</h1>
      <p>You have clicked on this component {clickCount} times.</p>
    </div>
  );
}

export default ExampleReactComponent;
