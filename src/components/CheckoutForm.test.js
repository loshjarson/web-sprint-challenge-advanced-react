import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const fNameInput = screen.getByLabelText(/first name/i);
    const lNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitButton = screen.getByRole('button', { name: /checkout/i });

    userEvent.type(fNameInput, "test")
    userEvent.type(lNameInput, "test")
    userEvent.type(addressInput, "22 jackson")
    userEvent.type(cityInput, "test")
    userEvent.type(stateInput, "test")
    userEvent.type(zipInput, "91311")

    userEvent.click(submitButton)
    
    expect(screen.getByTestId("successMessage")).toBeInTheDocument();

});
