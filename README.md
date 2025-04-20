# Journal Web Client

A simple web-based journaling application that allows you to write and save daily entries.

## Features

- Clean, minimalist interface
- Automatic date selection for today's entry
- Calendar picker to view/edit past entries
- Responsive design for mobile and desktop
- Day of week display

## Setup

1. Start the backend server on `localhost:3000`
2. Open `index.html` in a web browser

## Technical Details

The application consists of:
- `index.html` - Main application structure
- `style.css` - Responsive styling and layout
- `main.js` - Application logic and API communication

## API Endpoints

The client communicates with these endpoints:
- `GET /api/entry?date={date}` - Retrieve entry for specific date
- `POST /api/entry` - Save new journal entry

## Usage

1. The page loads with today's date selected
2. Write your journal entry in the text area
3. Click "Save" to store your entry
4. Use the date picker to view or edit past entries

