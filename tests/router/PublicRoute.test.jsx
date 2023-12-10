import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth";

describe('Pruebas en el <PublicRoute/>', () => { 
    test('debe de mostrar el children si no esta autenticado', () => {
        
        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Publica')).toBeTruthy();

        screen.debug();
     })

     test('debe de navegar si esta autenticado', () => { 
        
      })
 })