
import React, { useRef, useEffect } from "react";

import "./End.css"

const size = .5;
const overflow = .7;
const max_speed = 4;

const particle_types = {
    0: { color: '77, 82, 93', dir: .2, scale: 2.74, speed: .25 },
    1: { color: '96, 138, 132', dir: -.4, scale: 5.17, speed: .375 },
    2: { color: '24, 47, 92', dir: 1.5, scale: 6.54, speed: .5 },
    3: { color: '33, 73, 71', dir: -0.8, scale: 8, speed: 1 }
}

function render() {
    window.context.clearRect(0, 0, window.width, window.height);

    window.particles.forEach((particle) => {
        const type = particle_types[particle.type]

        window.context.fillStyle = `rgb(${type.color})`;
        window.context.save()
        window.context.translate(particle.x, particle.y)
        window.context.rotate(type.dir * Math.PI);
        window.context.fillRect(0, 0, type.scale * size, type.scale * size);
        window.context.fillStyle = `rgba(${type.color}, 0.5)`;
        window.context.fillRect(-type.scale * size, 0, type.scale * size, type.scale * size);
        window.context.fillStyle = `rgba(${type.color}, 0.3)`;
        window.context.fillRect(-type.scale * size * 2, 0, type.scale * size, type.scale * size);
        window.context.restore()

        particle.x += Math.max(Math.min(Math.cos(type.dir * Math.PI) * 0.7 + window.velocity.tx * type.speed / 8, max_speed), -max_speed) * 0.05;
        particle.y += Math.max(Math.min(Math.sin(type.dir * Math.PI) * 0.7 + window.velocity.ty * type.speed / 8, max_speed), -max_speed) * 0.05;

        wrap(particle)
    });

    requestAnimationFrame(render);
}

function wrap(particle) {
    if (!particle) return;
    if (particle.x < -overflow) particle.x = window.width + overflow / 2;
    if (particle.y < -overflow) particle.y = window.height + overflow / 2;
    if (particle.x > window.width + overflow) particle.x = -overflow / 2;
    if (particle.y > window.height + overflow) particle.y = -overflow / 2;
}

function resize() {
    window.scale = window.devicePixelRatio || 1;

    window.width = window.innerWidth * window.scale / 4;
    window.height = window.innerHeight * window.scale / 4;

    const count = Math.sqrt(window.width * window.height) * 3;

    window.canvas.width = window.width;
    window.canvas.height = window.height;

    window.particles = []
    for (let i = 0; i < count; i++) {
        window.particles.push({
            x: Math.random() * window.width,
            y: Math.random() * window.height,
            type: Math.max(Math.floor(Math.random() * 5 - 1), 0)
        });
    }
}

function movePointer(x, y) {
    if (typeof window.pointerX === "number" && typeof window.pointerY === "number") {
        let ox = x - window.pointerX,
            oy = y - window.pointerY;
        window.velocity.tx = window.velocity.tx + (ox / 8 * window.scale) * (window.gyroscopeInput ? 1 : -1);
        window.velocity.ty = window.velocity.ty + (oy / 8 * window.scale) * (window.gyroscopeInput ? 1 : -1);
    }

    window.pointerX = x;
    window.pointerY = y;
}

function onMouseMove(event) {
    if (window.gyroscopeInput) return;
    movePointer(event.clientX, event.clientY);
}

function onMouseLeave() {
    if (window.gyroscopeInput) return;
    window.pointerX = null;
    window.pointerY = null;
}

function onDeviceOrientation(event) {
    window.lastGyro = Date.now();
    window.gyroscopeInput = true;
    movePointer(event.gamma * 2, event.beta * 2);
    setTimeout(() => {
        if (Date.now() - window.lastGyro > 500) window.gyroscopeInput = false;
    }, 1000);
}

function End() {
    const canvasRef = useRef(null)

    useEffect(() => {
        window.context = 1; window.width = 1; window.height = 1; window.scale = 1;
        window.particles = [];
        window.pointerX = null; window.pointerY = null;

        window.velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
        window.gyroscopeInput = false;
        window.lastGyro = null;

        window.canvas = canvasRef.current;
        window.canvas.style.backgroundColor = 'rgb(3, 12, 21)';
        window.context = window.canvas.getContext("2d");

        resize();

        window.addEventListener("resize", resize);
        window.addEventListener("deviceorientation", onDeviceOrientation);
        document.body.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseleave", onMouseLeave);

        render();
    }, [canvasRef])

    return <canvas className="EndContainer" ref={canvasRef} />
}

export default End;
