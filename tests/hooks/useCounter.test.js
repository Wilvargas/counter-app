import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => {

    test('debe retornar los valores or defecto', () => {
        const { result } = renderHook( () => useCounter() );
        
        const { counter, decrement, increment, reset } = result.current;

        // Verificamos que los valores por defecto del hook sean correctos
        expect( counter ).toBe(10);  // Ajusta este valor según los valores por defecto de tu hook
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
        
    });


    test('debe generar el counter con el valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;
        expect( counter ).toBe(100);
    })
  
}); 