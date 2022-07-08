import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {react} from "react"
import "@testing-library/jest-dom"
import "@testing-library/dom"
import Form from './components/form';
import {jest} from "@jest/globals"
import { mockComponent } from 'react-dom/test-utils';

test('renders To Do List heading', () => {
  render(<App />);
  const heading = screen.getByText(/to do list/i);
  expect(heading).toBeInTheDocument();
});

it("Should render the add button", () => {
  render(<App/>)
  let button = screen.getAllByRole("button")
  expect(button[0]).toBeInTheDocument()
})

it("Should render the form label", () => {
  render(<App/>)
  const formElement = screen.getByText(/add a task/i)
  expect(formElement).toBeInTheDocument()
})

it("Should find a h1 element", () => {
  render(<App/>)
  const headingElement = screen.getByRole(/heading/i)
  expect(headingElement).toBeInTheDocument()
})

it("Should display something once the add task button has been clicked", () => {
  render(<App/>)
  const addButton = screen.getByText(/add a task/i)
  fireEvent.click(addButton)
  const result = screen.findAllByRole()
  expect.anything(result)
})

it("Should detect a result", () => {
  render(<App/>)
  const submitButton = screen.getByText(/add a task/i)
  fireEvent.click(submitButton)
  const result = screen.findAllByRole("object")
  expect.objectContaining(result)
})