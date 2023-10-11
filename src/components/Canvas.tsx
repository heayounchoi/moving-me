import useCanvas from "../hooks/useCanvas";
import Character from "../graphics/Character";
import { useEffect } from "react";

const Canvas = () => {
  let character: Character | null = null;
  const canvasRef = useCanvas((canvas) => {
    canvas.width = 1500;
    canvas.height = 700;
    canvas.style.background = "pink";
    character = new Character(canvas);
    document.addEventListener("keydown", character.handleArrowKeyDown());
  });

  useEffect(() => {
    return () => {
      character &&
        document.removeEventListener("keydown", character.handleArrowKeyDown());
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} style={{ position: "absolute" }} />
    </div>
  );
};

export default Canvas;
