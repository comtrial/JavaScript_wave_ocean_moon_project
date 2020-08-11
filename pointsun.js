export class PointSun {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.cur = 0;
        this.speed = 0.04;
        this.max = 30;
    }
    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}