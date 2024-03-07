# TestQA_TestAPI

Welcome to the TestQA and TestAPI repository!

## Overview

TestQA_TestAPI is a repository dedicated to storing various test suites for end-to-end (E2E) and API testing purposes. It serves as a centralized location to manage and organize all your tests, ensuring the quality and reliability of your software products.

## Repository Structure

```bash
TestQA_TestAPI/
│
├── e2e/
│   ├──
│   │   ├──
│   │   │   └──
│   │   └──
│   └──
│       └──
│
└── api/
    ├── parallel_run/
    │   ├── postman/
    │   │   ├── low.postman_collection.json
    │   │   └── k8d.postman_environment.json
    │   ├── package.json
    │   └── run_collections.js
    └──
```


## How to Use

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

```
git clone <repository-url>
```

2. **Navigate to the Desired Test Suite**: Depending on whether you want to run E2E tests or API tests, navigate to the respective directory:
- For E2E tests: `cd e2e_tests`
- For API tests: `cd api_tests`

3. **Run Tests**: Execute the tests using your preferred test runner. For example:

 - `pytest`
 - `csharp`
 - `cypress`
 - `postman`
 - `jest`


## Existing test

1. **parallel_run**: This Node.js script enables the parallel execution of two Postman collections using the Newman CLI. It allows users to run tests for different scenarios concurrently, improving efficiency and reducing execution time.

    ##### Usage
    1. **Configuration**: Update the paths to the Postman collections and environment files in the script (`collectionPath1`, `collectionPath2`, `envPath`).
    2. **Execution**: Run the script using Node.js, adjusting the `PARALLEL_RUN_COUNT` parameter if necessary.

    ```bash
    npm test
    ```

## Contributing

Contributions to this repository are welcome! If you have additional test cases, improvements, or bug fixes, feel free to submit a pull request.
