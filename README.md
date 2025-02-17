# Validator

This project implements a JavaScript form validator. It checks the validity of form inputs based on specified patterns and methods, providing visual feedback for valid and invalid entries.  It supports validation for common fields like email and phone numbers.

## Features

*   Validates form inputs using custom patterns and methods.
*   Provides visual feedback (success/error styling) for input validity.
*   Supports email and phone number validation.
*   Flexible validation rules through custom patterns and methods.

## Usage

1.  Include the `validator.js` script in your HTML file:

    ```html
    <script src="validator.js"></script>
    ```

2.  Create a form with the input elements you want to validate.

3.  Initialize the validator with the form selector, patterns, and methods:

## Validator Class

The `Validator` class handles form input validation.  It accepts an options object with the following properties:

*   **`selector`**:  The CSS selector of the form to validate (e.g., `#myForm`, `.myForm`).
*   **`pattern`**: An object containing regular expressions or validation functions for input validation. This allows for flexible validation rules.  Predefined patterns for `phone` and `email` can be provided.
*   **`method`**: An object specifying the validation methods for each input. This can refer to built-in HTML5 validation (like the `pattern` attribute) or custom JavaScript functions.

## Methods

*   **`init()`**: Initializes the validator by applying styles, setting patterns, and adding event listeners to the form inputs.
*   **`isValid(elem)`**: Checks if the given input element (`elem`) is valid based on the specified methods.
*   **`checkIt(event)`**: Validates the input element associated with the triggered event.  Typically used as an event handler.
*   **`showError(elem)`**: Applies error styles to the input element (`elem`).
*   **`showSuccess(elem)`**: Applies success styles to the input element (`elem`).
*   **`applyStyle()`**: Adds the necessary CSS styles for valid and invalid inputs.  This might be called during initialization.
*   **`setPattern()`**: Sets default patterns for phone and email validation.  You can override these with your own patterns in the `pattern` option.

## Predefined Patterns (can be overridden)

*   **`phone`**: Regular expression for validating phone numbers (e.g., Israeli phone numbers).  *You should replace the placeholder regex with your specific phone number validation regex.*
*   **`email`**: Regular expression for validating email addresses.  *You should replace the placeholder regex with your specific email validation regex.*
