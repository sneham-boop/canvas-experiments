/*const canvasSketch = require("canvas-sketch");

const settings = {
  //dimensions: [1080, 1080],
  dimensions: 'a4',
  pixelsPerInch: 300,
  units: 'in'
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.18;
    const iy = width * 0.18;
    const off = width * 0.03;
    let x, y;
/*
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.7) {
          context.beginPath();
          context.rect(x + (off / 2), y + (off / 2), w - off, h - off);
          context.stroke();
        } 

        const margin = 1 / 4;

    // Off-white background
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

    // Gradient foreground
    const fill = context.createLinearGradient(0, 0, width, height);
    fill.addColorStop(0, 'cyan');
    fill.addColorStop(1, 'orange');

    // Fill rectangle
    context.fillStyle = fill;
    context.fillRect(margin, margin, width - margin * 2, height - margin * 2); }
    }
  };
};


canvasSketch(sketch, settings);
*/

const canvasSketch = require("canvas-sketch");

// Sketch parameters
const settings = {
  dimensions: [1080, 1080],
  pixelsPerInch: 300,
  units: "px",
};

// Artwork function
const sketch = () => {
  return ({ context, width, height }) => {
    // Margin in inches
    const margin = 1 / 4;

    // Off-white background
    context.fillStyle = "hsl(0, 0%, 98%)";
    context.fillRect(0, 0, width, height);

    // Gradient foreground
    const fill = context.createLinearGradient(0, 0, width, height);
    fill.addColorStop(0, "salmon");
    fill.addColorStop(0.75, "orange");
    fill.addColorStop(1, "yellow");

    // Fill rectangle
    context.fillStyle = fill;
    context.fillRect(margin, margin, width - margin * 2, height - margin * 2);

    context.lineWidth = width * 0.01;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.06;
    const ix = width * 0.18;
    const iy = width * 0.18;
    const off = width * 0.03;
    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        //context.rect(x, y, w, h);
        context.arc(x, y, w/1.3, 0, 2 * Math.PI);
        context.stroke();

        if (Math.random() > 0.7) {
          context.beginPath();
          //context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.arc(x, y, w/6, 0, 2 * Math.PI);
          context.fillStyle = "black";
          context.fill();
          context.stroke();
        }
      }
    }
  };
};

// Start the sketch
canvasSketch(sketch, settings);
