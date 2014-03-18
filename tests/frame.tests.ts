///<reference path="../app/frame.ts"/>

module Bowling.Tests
{
    setup: ()=>
    {
    };

    test("one rolls does not complete the frame", () =>
    {
        var frame = new Bowling.Frame(0, null);
        frame.roll(1);
        ok(!frame.isComplete(), "one rolls does not complete the frame");
    });

    test("two rolls complete the frame", () =>
    {
        var frame = new Bowling.Frame(0, null);
        frame.roll(1);
        frame.roll(1);
        ok(frame.isComplete(), "two rolls comple the frame");
    });

    test("roll 10 is strike", () =>
    {
        var frame = new Bowling.Frame(0, null);
        frame.roll(10);
        ok(frame.isStrike(), "roll 10 is strike");
    });

    test("roll 10 is not a spare", () =>
    {
        var frame = new Bowling.Frame(0, null);
        frame.roll(10);
        ok(!frame.isSpare(), "roll 10 is not a spare");
    });

    test("strike completes the frame", () =>
    {
        var frame = new Bowling.Frame(0, null);
        frame.roll(10);
        ok(frame.isComplete(), "frame is complete");
    });

    test("value of frame is sum of two rolls", () =>
    {
        var frame = new Bowling.Frame(0, null);
        frame.roll(1);
        frame.roll(1);
        equal(frame.value(), 2);
    });

    test("roll 5 and 5 is a spare", ()=>
    {
        var frame = new Bowling.Frame(0, null);
        frame.roll(5);
        frame.roll(5);
        ok(frame.isSpare(), "frame is a spare");
    });
}