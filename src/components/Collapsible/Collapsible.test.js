/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Collapsible from ".";
 import { render, screen } from "@testing-library/react";


 describe('Collapsible component', () => {
    beforeEach(() => {
        render(<Collapsible />)
    })

    it('displays a toggle button', () => {
        const toggle = screen.getByText('Need a hint?')
        expect(toggle.textContent).toBe('Need a hint?')
    })

    it('displays a button', () => {
        const button = screen.getByText('Intro to Jest')
        expect(button.textContent).toBe('Intro to Jest')
    })
    
})
