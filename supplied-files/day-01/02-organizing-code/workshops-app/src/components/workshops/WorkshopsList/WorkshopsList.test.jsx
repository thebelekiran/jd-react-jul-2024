import WorkshopsList from "./WorkshopsList";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from '../../../contexts/ThemeContext';
import { render, screen } from '@testing-library/react';
import data from '../../../mocks/data/workshops';

describe("WorkshopsList on load", () => {
    it("should show a loading spinner", () => {
        render(
            <BrowserRouter>
                <ThemeContext.Provider value={{ theme: 'light' }}>
                    <WorkshopsList />
                </ThemeContext.Provider>
            </BrowserRouter>
        );

        const spinner = screen.getByTestId("loading-spinner");
        expect(spinner).toBeInTheDocument();
    });

    it("should show the names of workshops on successful fetch", async () => {
        render(
            <BrowserRouter>
                <ThemeContext.Provider value={{ theme: 'light' }}>
                    <WorkshopsList />
                </ThemeContext.Provider>
            </BrowserRouter>
        );

        const spinner = screen.getByTestId("loading-spinner");
        expect(spinner).toBeInTheDocument();

        for (let i = 0; i < 10; ++i) {
            // keeps trying to find the element for 1 second
            const element = await screen.findByText(data[i].name);
            expect(element).toBeInTheDocument();
        }
    });
})