const { render, screen } = require("@testing-library/react");
import Contact from "../contact/Contact";
import "@testing-library/jest-dom"

test("Should load contact component",()=>{
    render(<Contact />)
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument();
})