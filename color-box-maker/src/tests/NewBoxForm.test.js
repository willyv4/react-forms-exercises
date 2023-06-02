import NewBoxForm from "../NewBoxForm";
import { render, fireEvent, screen } from "@testing-library/react";

it("renders without crashing", function () {
  render(<NewBoxForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

test("NewBoxForm submits new box data", () => {
  const addBoxs = jest.fn();

  render(<NewBoxForm addBoxs={addBoxs} />);

  fireEvent.change(screen.getByLabelText("Background Color:"), {
    target: { value: "red" },
  });
  fireEvent.change(screen.getByLabelText("Width:"), {
    target: { value: "100px" },
  });
  fireEvent.change(screen.getByLabelText("Height:"), {
    target: { value: "200px" },
  });

  fireEvent.click(screen.getByText("Add New Box!"));

  expect(addBoxs).toHaveBeenCalledWith({
    bgColor: "red",
    w: "100px",
    h: "200px",
  });
});
