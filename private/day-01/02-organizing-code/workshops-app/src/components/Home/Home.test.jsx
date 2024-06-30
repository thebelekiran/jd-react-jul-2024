import Home from './Home';
import { render, screen } from '@testing-library/react';

// import '@testing-library/jest-dom';

describe("The Home component", () => {
    it("should render the Home page with the name of the name in a heading", () => {
        render(<Home />);

        const title = screen.getByRole("heading", { level: 1 })

        expect(title).toHaveTextContent("Workshops App")
    });
});