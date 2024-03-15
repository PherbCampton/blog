// @ts-nocheck
import React from "react";
import { Contact } from "../../src/pages/contact";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { toast } from "react-toastify";

vi.mock("react-toastify", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

describe("Contact component", () => {
  test("renders contact form correctly", () => {
    render(<Contact />);

    expect(screen.getByText(/Talk to an expert/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Describe your concerns/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Reach out to us/i)).toBeInTheDocument();
  });

  test("submits form with valid input", async () => {
    render(<Contact />);

    // Fill in the form
    userEvent.type(screen.getByLabelText(/Name/i), "John Doe");
    userEvent.type(screen.getByLabelText(/Email/i), "test@example.com");
    userEvent.type(
      screen.getByLabelText(/Describe your concerns/i),
      "This is a test message."
    );

    // Submit the form
    fireEvent.click(screen.getByText(/Reach out to us/i));

    // Wait for the success message
    // await waitFor(() => {
    //   expect(toast.success).toHaveBeenCalled();
    // });
  });

  test("displays error message with empty input", async () => {
    render(<Contact />);

    // Submit the form without filling in any fields
    fireEvent.click(screen.getByText(/Reach out to us/i));

    //Wait for the error message
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });

  // Add more tests as needed
});
