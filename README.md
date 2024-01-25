# QR Code Converter

## Overview

QR Code Converter is a Node.js and Express.js-based project that enables you to effortlessly convert text into QR codes. This project utilizes the 'qr-image' npm package for QR code generation. With a simple and intuitive web interface, users can input text, generate QR codes, and view the results seamlessly.

## Project Structure

- **`public/`**: Contains static assets like HTML files (`index.html`, `result.html`) and CSS styles (`style.css`).

- **`result.png`**: The generated QR code image

- **`index.js`**: The main entry point of the application.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): Comes with Node.js installation.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/QR-code-convertor.git
   ```

2. Navigate to the project directory:

   ```bash
   cd QR-code-convertor
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000).

3. Enter the text you want to convert to a QR code and submit the form.

4. View the generated QR code on the results page.

## Project Structure

- **`/public`**: Contains static assets.

  - **`index.html`**: The main page with the input form.

  - **`result.html`**: The page displaying the generated QR code.

  - **`style.css`**: CSS styles for the HTML pages.

- **`result.png`**: The generated QR code image.

- **`index.js`**: Handles the routes for the application.

## API Endpoints

- **POST /result:** Endpoint for generating QR codes. Send a POST request with the text in the request body.

  ```json
  {
    "link": "Your text here"
  }
  ```

- **GET /result.png:** Endpoint to view the generated QR code image.

- **GET /style.css:** Endpoint to retrieve the CSS styles.

- **GET /:** The main endpoint serving the input form.# QR CODE CONVERTOR
The QR Code Generator is a versatile project designed to effortlessly convert text into QR codes using the 'qr-image' npm package. This lightweight and easy-to-use Node.js application which generates QR code for the given text.


## Contributors

- [Sairaj Pawar](https://github.com/Sairajepawar)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to contribute, report issues, or suggest improvements. Happy coding!
