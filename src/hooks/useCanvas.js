import { useRef, useEffect } from "react";

export const useCanvas = (draw, canvasCtx = "2d") => {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext(canvasCtx);
        let frameCount = 0;
        let animationFrameId;

        const render = () => {

            frameCount++;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }

        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }

    }, [draw, canvasCtx]);

    return canvasRef;
}