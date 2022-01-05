function createTileset(map){
    var Tiles1 = map.addTilesetImage('slice03_03', 'slice03_03');
    var Tiles2 = map.addTilesetImage('slice27_27', 'slice27_27');
    var Tiles3 = map.addTilesetImage('slice33_33', 'slice33_33');
    var Tiles4 = map.addTilesetImage('slice19_19', 'slice19_19');
    var Tiles5 = map.addTilesetImage('slice24_24', 'slice24_24');
    var Tiles6 = map.addTilesetImage('sky', 'sky');
    var Tiles7 = map.addTilesetImage('cakeHalfAltMid','cakewin');
    return [Tiles1, Tiles2, Tiles3, Tiles4, Tiles5, Tiles6, Tiles7];
}
export { createTileset };
