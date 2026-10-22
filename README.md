# DSA Visualizer

An interactive web application for visualizing Data Structures and Algorithms (DSA), designed to make algorithm execution easier to understand through step-by-step visualizations.

The project aims to combine a simple React frontend with a Python FastAPI backend, where algorithms are executed in Python and their intermediate states are displayed visually.

## Overview

Understanding an algorithm involves more than knowing its final output. This project aims to make the process visible by showing how an algorithm operates on data, one step at a time.

Users will be able to provide an input array, select an algorithm, and observe its execution through an interactive visualization.

## Planned Features

- **Interactive Visualizations:** Represent array elements as bars and highlight the elements involved in each operation.
- **Step-by-Step Execution:** Move forward and backward through an algorithm's execution.
- **Playback Controls:** Play, pause, reset, and adjust visualization speed.
- **Custom Input:** Enter an array manually or generate a random array.
- **Execution Statistics:** Display comparisons and swaps where applicable.
- **Algorithm Information:** Show explanations and time and space complexity.
- **Multiple Algorithms:** Extend the visualizer to support sorting and searching algorithms.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| Vite | Frontend development server and build tool |
| Python | Algorithm implementation |
| FastAPI | Backend API |
| Pydantic | Request and response validation |
| Uvicorn | ASGI server for running the backend |
| Git & GitHub | Version control and project hosting |

## Planned Algorithms

| Algorithm | Category | Average Time Complexity |
|---|---|---|
| Bubble Sort | Sorting | O(n²) |
| Selection Sort | Sorting | O(n²) |
| Insertion Sort | Sorting | O(n²) |
| Binary Search | Searching | O(log n) |

Binary Search requires a sorted input array. The algorithm list will expand as the project develops.

## How It Works

The planned application follows this workflow:

1. The user selects an algorithm and provides an input array through the React interface.
2. React sends the input to the FastAPI backend through an HTTP request.
3. The backend validates the input and invokes the corresponding Python algorithm.
4. The algorithm records its intermediate states and relevant operation details.
5. FastAPI returns the execution data as a JSON response.
6. React uses the returned data to display the visualization and provide playback controls.

## Project Structure

The project is planned to follow a structure similar to the following:

```text
dsa-visualizer/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
├── backend/
│   ├── algorithms/
│   ├── tests/
│   ├── main.py
│   ├── schemas.py
│   └── requirements.txt
└── README.md
```

This is the target structure; the repository may differ while development is in progress.

## Getting Started

The complete React + FastAPI setup instructions will be added as the application becomes runnable.

### Planned Backend Setup

Prerequisites: Python 3.10 or later and pip.

After the backend files and dependencies have been created:

```bash
cd backend
python -m venv .venv
```

Activate the virtual environment.

**Linux/macOS:**

```bash
source .venv/bin/activate
```

**Windows PowerShell:**

```powershell
.venv\Scripts\Activate.ps1
```

Install dependencies and start the development server:

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

Once the FastAPI application is configured, its interactive API documentation will be available at:

`http://127.0.0.1:8000/docs`

### Planned Frontend Setup

After the React application has been created:

```bash
cd frontend
npm install
npm run dev
```

Vite will display the local URL where the frontend can be accessed.

## Learning Objectives

This project is also a hands-on learning exercise focused on:

- Understanding sorting and searching algorithms.
- Implementing algorithms and recording their execution in Python.
- Building REST APIs using FastAPI.
- Validating API requests and responses with Pydantic.
- Connecting a React frontend to a Python backend.
- Testing algorithms and API endpoints.
- Using Git and GitHub to manage a software project.

## Project Status

**In Development**

The project is being developed incrementally, starting with the existing array visualization and progressing toward a React frontend, a FastAPI backend, and step-by-step algorithm execution.

Features and setup instructions will be updated as they are implemented.

## Future Improvements

- Add more sorting and searching algorithms.
- Improve visualization controls and explanations.
- Add automated tests for algorithms and API endpoints.
- Deploy the frontend and backend for public access.

## License

A license has not yet been selected. Licensing information will be added once a license is chosen.
