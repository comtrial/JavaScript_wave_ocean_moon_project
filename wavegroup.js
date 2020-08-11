import { Wave } from "./wave.js";

export class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 5;



        this.color = ['rgba(15, 60, 80, .9', 'rgba(39, 120, 140, .8)', 'rgba(77, 179, 193, .6)'];

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i]
            );

            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(context) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(context);
        }
    }
}