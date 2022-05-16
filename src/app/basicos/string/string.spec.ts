
//describe('Pruebas de Strings');
//it('Debe regresar un string');

import { mensaje } from "./string";

describe( 'Pruebas de strings', () => {

    it( 'Debe de regresar un string', () => {


        const resp = mensaje('Jessica');

        expect( typeof resp ).toBe('string');

    });

    it( 'Debe de retornar un saludo con el nombre enviado', () => {

        const nombre = 'Juan';

        const resp = mensaje( nombre );

        expect( resp ).toContain( nombre );

    });
    
});


