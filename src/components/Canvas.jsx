import React, { useCallback } from "react";
import { useCanvas } from "../hooks/useCanvas";

const Canvas = ({ canvasCtx, ...rest }) => {

  const draw = useCallback((context, frameCount) => {

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(context.canvas.width / 2, context.canvas.height / 2, 200*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI);
    context.fill();
  }, []);

  const canvasRef = useCanvas(draw, canvasCtx);

  return <canvas ref={canvasRef} {...rest}></canvas>;
};

export default Canvas;
