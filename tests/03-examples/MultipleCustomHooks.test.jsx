import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe('Pruebas en MultipleCustomHooks', () => {  

    test('debe mostrar el componente por defecto', () => {  

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Cargando') );
        expect( screen.getByText('Información de Pokemón') );

        const nextButton = screen.getByRole('button', {name: 'Siguiente'})
         // Verifica que el botón está presente en el DOM
        expect( nextButton ).toBeTruthy();



    })
})