///<reference path="game.ts"/>

module Bowling
{
    export class Frame
    {
        pins: number[];
        bonus: number;
        index: number;
        prev: Frame;

        constructor(index: number, prev: Frame)
        {
            this.pins = new Array<number>();
            this.bonus = 0;
            this.index = index;
            this.prev = prev;
        }

        roll(n: number)
        {
            if (this.isComplete())
                throw "error";

            this.applyBonuses(n);

            this.pins.push(n);
        }

        applyBonuses(n: number)
        {
            if (this.index > 0)
            {
                if (this.pins.length == 0 && (this.prev.isSpare() || this.prev.isStrike()))
                    this.prev.bonus += n;

                if (this.pins.length == 1 && this.prev.isStrike())
                    this.prev.bonus += n;
            }

            if (this.index > 1)
            {
                if (this.pins.length == 0 && this.prev.isStrike() && this.prev.prev.isStrike())
                    this.prev.prev.bonus += n;
            }
        }

        isSpare(): boolean
        {
            return this.pins.length >= 2 && (this.pins[0] + this.pins[1] == 10);
        }

        isStrike(): boolean
        {
            return this.pins.length >= 1 && this.pins[0] == 10;
        }

        isComplete(): boolean
        {
            if (this.index == 9)
            {
                if (this.isStrike() || this.isSpare())
                {
                    return this.pins.length == 3;
                }
                else
                {
                    return this.pins.length == 2;
                }
            }
            else
            {
                return this.isStrike() || this.pins.length == 2;
            }
        }

        value(): number
        {
            var result = 0;

            for (var i = 0; i < this.pins.length; i++)
                result += this.pins[i];

            if (this.isSpare() || this.isStrike())
                result += this.bonus;

            return result;
        }
    }
} 