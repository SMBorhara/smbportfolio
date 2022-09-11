import React from "react";
 
export default class Particles extends React.Component {
  componentDidMount() {
    this.generateParticles();
  }
 
  generateParticles = () => {
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
 
    let num = 150;
    let size = 1;
    let color = "#fff";
    let min_speed = 0.1;
    let max_speed = 0.5;
    let line_distance = 80;
    let particles = [];
 
    const distance = (pointA, pointB) => {
      let dx = Math.abs(pointB.x - pointA.x);
      let dy = Math.abs(pointB.y - pointA.y);
      return Math.sqrt(dx * dx + dy * dy);
    };
 
    const randVelocity = () => {
      return max_speed * Math.random() - min_speed;
    };
 
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
 
        // Random velocities, that will move the particle in a random direction. ex: -1 on the x-plane and 1 on the y-plane.
        this.vx = randVelocity();
        this.vy = randVelocity();
 
        this.color = color;
        this.radius = Math.floor(Math.random() * 3) + 0.5;
      }
    }
 
    for (let i = 0; i < num; i++) {
      particles.push(new Particle());
    }
 
    const draw = () => {
      ctx.fillStyle = "#22262a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
 
      // Lets draw particles from the array now
      for (let t = 0; t < particles.length; t++) {
        // This particle
        let p = particles[t];
 
        for (let q = 0; q < particles.length; q++) {
          // Check position distance
          if (distance(particles[q], p) <= line_distance) {
            ctx.beginPath();
            ctx.lineWidth = 0.2;
            ctx.strokeStyle = "pink";
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[q].x, particles[q].y);
            ctx.stroke();
          }
        }
 
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false);
        ctx.fill();
 
        p.x += p.vx;
        p.y += p.vy;
 
        // Invert values if they touch the canvas borders
        if (p.x <= size || p.x >= canvas.width - size) {
          p.vx *= -1;
        }
        if (p.y <= size || p.y > +canvas.height - size) {
          p.vy *= -1;
        }
      }
 
      requestAnimationFrame(draw);
    };
 
    draw();
  };
  render() {
    return <canvas id="particles"></canvas>;
  }
}
