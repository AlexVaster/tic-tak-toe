import { render, screen } from "@testing-library/react";
import {App, Game} from "./App";
import React, { Component } from "react";
import useStatus from "../../hooks/useStatus";

describe("General tests", () => {
  it("Should contain div appcontainer", () => {
    render(<App />);
    const screenStatus = screen.getByRole('appcontainer');
    expect(screenStatus).toBe;
  });

  it("Should contain button", () => {
    render(<App />);
    const screenStatus = screen.findAllByRole('button');
    expect(screenStatus).toBe;
  });

  it("Test hook", () => {
    useStatus
  });
});
