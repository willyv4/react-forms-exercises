import NewTodoForm from "../NewTodoForm";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "../TodoList";

it("renders without crashing", function () {
  render(<NewTodoForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

test("NewTodoForm submits new box data", () => {
  const addTodo = jest.fn();

  render(<NewTodoForm addTodo={addTodo} />);

  fireEvent.change(screen.getByLabelText("Todo:"), {
    target: { value: "go Sk8" },
  });

  fireEvent.click(screen.getByText("Add Todo"));

  expect(addTodo).toHaveBeenCalledWith({
    todo: "go Sk8",
  });
});

test("added todo can be deleted", () => {
  const addTodo = jest.fn();

  render(<TodoList addTodo={addTodo} />);

  fireEvent.change(screen.getByLabelText("Todo:"), {
    target: { value: "go Sk8 2.0" },
  });

  fireEvent.click(screen.getByText("Add Todo"));

  expect(screen.getByText("go Sk8 2.0")).toBeInTheDocument();

  fireEvent.click(screen.getByText("X"));

  expect(screen.queryByText("go Sk8 2.0")).toBeNull();
});
