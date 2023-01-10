import useCanvas from "../hooks/useCanvas";

const Canvas = () => {
  const canvasRef = useCanvas((canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.background = "pink";
  });

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Canvas;
