import useCanvas from "../hooks/useCanvas";
import Character from "../character/Character";

const Canvas = () => {
  let character: Character | null = null;
  const canvasRef = useCanvas((canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.background = "pink";
    character = new Character(canvas);
  });

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Canvas;
