import React from "react";
//render will render the component, cleanup is used to remove components from the DOM to prevent memory leaking
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from "..";

afterEach(cleanup)

describe('About component', () => {
    //renders About test
    //first test verifies the component is rendering
    it('renders', () => {
        render(<About />)
    })

    //a snapshot is a serialized version of the DOM node structure, enabled by Jest
    //when changes are made to a component's element, a new snapshot needs to be written at the command line by typing u to update, or rewrite a new snapshot
    it('matches snapshot DOM node structure', () => {
        //asFragment returns a snapshot
        const { asFragment } = render(<About />)
        expect(asFragment()).toMatchSnapshot();
    })
})
