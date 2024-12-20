# Firebase Counter Increment Bug

This repository demonstrates a common issue when incrementing a counter in a Firebase document. The original code fails to gracefully handle the scenario where the document doesn't exist, resulting in silent errors or unexpected behavior. The solution provides a robust approach to address this issue.

## Bug
The `incrementCounter` function fetches a document from Firestore. If the document exists, it updates the `counter` field; otherwise, it should handle this scenario correctly. However, the original implementation simply logs an error without proper error handling. This leads to potential issues in production environments.

## Solution
The improved `incrementCounter` function includes explicit error handling and returns a Promise that resolves or rejects, thus improving the application's stability.

## Usage
1.  Initialize a Firebase project.
2.  Clone this repository.
3.  Run the code using Node.js.  Make sure to configure your firebase project before running the code.
4.  Observe the different behaviors of the original and improved functions.
