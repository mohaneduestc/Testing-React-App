import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer'

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

it("renders snapshoots", ()=>{
    const tree = renderer.create(<Button label="save"/>).toJSON()
    expect(tree).toMatchSnapshot();
})