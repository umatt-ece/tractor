# tractor 🚜

University of Manitoba Association of Tiny Tractors (UMATT) monorepo that contains all software the powers the tractor!

## Project Setup

So you want to get tarted contributing to tractor? Awesome, lets get you started.

The backend is written in Python while the frontend is written in Typescript using NextJs.

### Environment Setup

_As a note for these things if it asks you to add to path click, yes!_

1. Install NodeJS from the [NodeJS Download Site](https://nodejs.org/en/download), for simplicity sake use the prebuilt bundle for NodeJS.

2. Install Python from the [Python Download Site](https://www.python.org/downloads/) with this grab the latest version of python and install.

3. Install uv to assist in running the Python projects in a nice manor installation instructions can be found [here](https://docs.astral.sh/uv/getting-started/installation/#__tabbed_1_2).

### Getting Running

1. Open your shell into the directory of where the project lives.

2. First, let’s set up the backend server that sends data to our frontend.  
   Change into the `server` directory using `cd server/`, then run:

   ```bash
   uv run uvicorn app.main:app --reload
   ```

   This will install the required dependencies and start the server!

3. Move back up to the project root with cd .., then go into the display directory:

   ```bash
   cd display/
   npm run dev
   ```

   This will start the frontend development server.

4. Profit! Now you’ve got the environment set up and can get running.
