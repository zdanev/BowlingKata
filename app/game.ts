///<reference path="frame.ts"/>

module Bowling
{
    export class Game
    {
        frames: Frame[];
        currentFrame: number;

        constructor()
        {
            this.frames = new Array<Frame>(10);
            
            var prev = null;
            for (var i = 0; i < 10; i++)
            {
                this.frames[i] = new Frame(i, prev);
                prev = this.frames[i];
            }

            this.currentFrame = 0;
        }

        roll(n: number)
        {
            if (this.isOver())
                throw "error";

            if (this.frames[this.currentFrame].isComplete())
                this.currentFrame++;

            this.frames[this.currentFrame].roll(n);
        }

        score(): number
        {
            var result = 0;

            for (var i = 0; i < 10; i++)
                result += this.frames[i].value();

            return result;
        }

        isOver(): boolean
        {
            return this.frames[9].isComplete();
        }
    }
} 