import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup)

it("renders without creashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button/>, div);
    ReactDOM.unmountComponentAtNode(div)
})

it("renders button correctly", ()=>{
    const {getByTestId} = render(<Button label="click me pls"/>)
    expect(getByTestId('button')).toHaveTextContent("click me pls")
})

it("renders button correctly", ()=>{
    const {getByTestId} = render(<Button label="click"/>)
    expect(getByTestId('button')).toHaveTextContent("click")
})