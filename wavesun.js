import { PointSun } from './pointsun.js'
export class WaveSun {
    constructor() {
        this.radius = 140;
        this.originPos = [];
        this.pos = [];
        this.totalPoint = 30;
        this.gap = 1 / this.totalPoint;

        for (let i = 0; i < this.totalPoint; i++) {
            const pos = this.getCirclePoint(this.radius, this.gap * i);
            this.originPos[i] = pos;
        }
    }
    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = this.stageWidth - this.radius - 140;
        this.centerY = this.radius + 210;

        this.init()
    }
    updatePoints() {
        for (let i = 0; i < this.totalPoint; i++) {
            const pos = this.originPos[i];

            this.pos[i] = {
                x: pos.x + this.ranInt(5),
                y: pos.y + this.ranInt(5)
            };
        }
    }
    ranInt(max) {
        return Math.random() * max;
    }
    getCirclePoint(radius, t) {
        const theta = 2 * Math.PI * t;
        return {
            x: radius * Math.cos(theta),
            y: radius * Math.sin(theta)
        };
    }

    init() {
        this.point = new PointSun(
            this.centerX,
            this.centerY
        );
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = "rgba(230, 230, 230, 0.8)";

        this.point.update();

        this.updatePoints();

        let pos = this.pos[0];
        context.moveTo(pos.x + this.point.x, pos.y + this.point.y);
        for (let i = 1; i < this.totalPoint; i++) {
            const pos = this.pos[i];
            context.lineTo(pos.x + this.point.x, pos.y + this.point.y);
        }



        // context.arc(this.point.x, this.point.y, this.radius, 0, Math.PI * 2);
        context.fill();


    }
}