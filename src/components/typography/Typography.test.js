import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

import { Typography } from "./Typography";

let container = null;
beforeEach(() => {
    // setting up DOM element as render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

// tests whether child content is rendered
it("renders typography label", () => {
    act(() => {
        render(<Typography variant="h2">Test</Typography>, container);
    });
    expect(container.textContent).toBe("Test");
});