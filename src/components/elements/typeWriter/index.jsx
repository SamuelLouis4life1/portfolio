import React, { useState, useEffect } from "react";
import Typist from "react-typist";

function AboutTypewriter () {
    const [count, setCount] = useState(1);

    useEffect(() => {
      // document.title = `You clicked ${count} times`;
      console.log("Count: " + count);
      setCount(1);
    }, [count]);
  
    return (
      <div>
        {count ? (
          <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
            <span>UI / UX design</span>
            <Typist.Backspace count={20} delay={5000} />
            <span>Fullstack Developer</span>
            <Typist.Backspace count={20} delay={5000} />
            <span>Web developper</span>
            <Typist.Backspace count={20} delay={5000} />
          </Typist>
        ) : (
          ""
        )}
      </div>
    );
}

export { AboutTypewriter }