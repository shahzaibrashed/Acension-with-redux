import React, { useEffect } from "react";

const MouseCursorPizza = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = document.getElementById("pizza-cursor");
      if (cursor) {
        cursor.style.left = `${event.clientX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${event.clientY - cursor.offsetHeight / 2}px`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <img
        id="pizza-cursor"
        src="/FFF_Ascension_LO 1.png" 
        alt="Pizza Cursor"
        style={{
          position: "absolute",
          pointerEvents: "none", 
          zIndex: 3,
          width: "40px", 
          height: "40px", 
          transition: "none", 
        }}
      />
    </div>
  );
};

export default MouseCursorPizza;
