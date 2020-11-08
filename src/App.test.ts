import { render } from "@testing-library/svelte";
import { expect } from "chai";
import App from "./App.svelte";

describe("<App>", () => {
  it("renders main page", () => {
    const { getByText } = render(App);
    const labelElement = getByText(/Position/);
    expect(document.body.contains(labelElement));
  });
});
