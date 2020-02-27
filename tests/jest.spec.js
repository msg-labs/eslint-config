describe( 'some piece of code', () => {
    it( 'is contained in a describe function', () => {
        expect.assertions( 1 );
        expect( 'test' ).toStrictEqual( 'test' );
    } );
} );

describe( 'avoid alias', () => {
    it( 'avoids alias', () => {
        expect.assertions( 1 );
        expect( true ).toThrow( 'It actually doesn\'t throw' );
    } );
} );

const asyncFunction = () => new Promise( accept => accept( true ) );

describe( 'async tests', () => {
    it( 'returns a promise', async () => {
        expect.assertions( 1 );

        const response = await asyncFunction();

        expect( response ).toStrictEqual( true );
    } );
} );

describe( 'something', () => {
    it( 'does', () => {
        expect.assertions( 1 );

        expect( true ).toStrictEqual( true );
    } );
} );

describe( 'it allows nested requires', () => {
    it( 'requires a module', () => {
        expect.assertions( 1 );
        const fs = require( 'fs' );

        expect( fs ).not.toBeUndefined();
    } );
} );

describe( 'it doesn\'t enforce a maximum number of nested callbacks', () => {
    describe( 'this is still legal', () => {
        describe( 'legal, no probs', () => {
            jest.doMock( 'fs', () => ( {
                write: () => () => () => 'test'
            } ) );
        } );
    } );
} );
