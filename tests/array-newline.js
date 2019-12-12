const definition = [ '1', '2', '3', '4' ];

setTimeout( definition );

Object
    .keys( { a: 1 } )
    .map( ( [ key, value ] ) => [ value, key ] );

Object
    .keys( { a: 1 } )
    .map( ( [ key, value ] ) => [
        value,
        key
    ] );
