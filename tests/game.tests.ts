///<reference path="../app/game.ts"/>

module Bowling.Tests
{
    test("hello world", ()=>
    {
        ok("true", "hello world test");
    });

    test("create game", ()=>
    {
        var game = new Bowling.Game();
        notEqual(game, null, "created bowling game");
    });

    test("game has a score", ()=>
    {
        var game = new Bowling.Game();
        equal(game.score(), 0, "game starts with score of zero");
    });

    test("game has 10 frames", ()=>
    {
        var game = new Bowling.Game();
        equal(game.frames.length, 10, "game has 10 frames");
    });

    test("score of game is sum of values of all frames", ()=>
    {
        var game = new Bowling.Game();
        for (var i = 0; i < 20; i++)
            game.roll(1);
        equal(game.score(), 20);
    });

    test("game is over when all 10 frames are complete", () =>
    {
        var game = new Bowling.Game();
        for (var i = 0; i < 20; i++)
            game.roll(1);

        ok(game.isOver(), "game is over");
    });

    test("bonus for spare is value of next ball", ()=>
    {
        var game = new Bowling.Game();
        game.roll(5);
        game.roll(5);
        game.roll(7);

        ok(game.frames[0].isSpare(), "first frame is a spare");
        equal(game.frames[0].value(), 17);
    });

    test("perfect game", ()=>
    {
        var game = new Bowling.Game();
        for (var i = 0; i < 12; i++)
            game.roll(10);

        ok(game.isOver(), "game is over");
        equal(game.score(), 300, "perfect game score is 300");
    });
}