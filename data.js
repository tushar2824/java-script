const Games = [
    {
        id : 1,
        Name : 'god of war 3',
        Description : 'God of War III is an action-adventure hack and slash video game developed by Santa Monica Studio and published by Sony Computer Entertainment.',
        Year : 2010
    },
    {
        id : 2,
        Name : 'GTA V',
        Description : 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. ',
        Year : 2013

    },
];

Games.map((game)=> {
    console.log(game.id);
    console.log(game.Name);
    console.log (game.Description);
    console.log(game.Year);
    console.log("-------------------------------------------------------------------------------------------------");
})