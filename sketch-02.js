const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const degToRad = (deg) => {
  return (deg / 180) * Math.PI;
};

const sketch = () => {
  return ({ context, width, height }) => {
    // Margin in inches
    const margin = 1 / 4;

    // Off-white background
    // Gradient foreground
    const fill = context.createLinearGradient(0, 0, width, height);
    fill.addColorStop(0, "tomato");
    fill.addColorStop(1, "yellow");

    // Fill rectangle
    context.fillStyle = fill;
    context.fillRect(margin, margin, width - margin * 2, height - margin * 2);

    const x = width * 0.5; // x, y : center of canvas
    const y = height * 0.5;

    const layers = 8;
    const maxLengthEachLine = width * 0.02;

    for (let layer = 1; layer < layers + 1; layer++) {
      const w = width * (1 - 0.1 * layer + 0.01); // diameter of the circle
      const divisions = Math.floor(Math.random() * 360 + 1); // number of divisions

      for (let division = 0; division < divisions; division++) {
        const randomLength = Math.floor(Math.random() * maxLengthEachLine + 1);
        const step = 360 / divisions;
        const h = Math.floor(Math.random() * 1 + 1); // how thick each line can be

        context.save();
        context.translate(x, y);
        context.rotate(degToRad(step * division));
        context.fillStyle = "black";
        context.beginPath();
        context.rect(-w * 0.5, -h * 0.5, randomLength, h);
        context.fill();
        context.restore();
      }
    }

    // circle at the center
    context.fillStyle = "tomato";
    context.beginPath();
    context.arc(x, y, 30, 0, Math.PI * 2);
    context.fill();
  };
};

canvasSketch(sketch, settings);
