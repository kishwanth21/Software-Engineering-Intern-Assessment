# Software-Engineering-Intern-Assessment

## Introduction
This project is a simple FastAPI web application that provides a basic login functionality using a MySQL database. It allows users to enter their username and password and checks if the provided credentials match any entry in the MySQL database. If the credentials are valid, it returns a "Login successful" message; otherwise, it raises an HTTP 401 "Invalid credentials" error. <br> 

## Project Setup
To set up and run this project, follow the steps below:
#### Pre-requisites
Python: Make sure you have Python installed on your system. This project requires Python 3.6 or higher.
MySQL: You need a running MySQL server. Ensure that you have the necessary credentials (username and password) to connect to the MySQL server. If you don't have MySQL installed, you can download and install it from the official website: https://dev.mysql.com/downloads/installer/

## Installation
1. Clone this repository to your local machine:
```sh
git clone <repository-url>
cd <repository-folder>
```
2. Create a virtual environment:
```sh
python -m venv venv
```
3. Activate the virtual environment:
On Windows:
```sh
venv\Scripts\activate
```
On macOS and Linux:
```sh
source venv/bin/activate
```
4. Install the required Python packages:
```sh
pip install -r requirements.txt
```

## Database Setup
The application creates a test table 'users' with some sample data to demonstrate the login functionality. 

## Running the Application
To run the FastAPI application, execute the following command:
```sh
uvicorn app:app --reload
```
The '--reload' option enables automatic code reloading during development, so you don't have to restart the server after each code change.

## Accessing the Application
Once the application is running, you can access it in your web browser by navigating to 
'http://127.0.0.1:8000/' The login page will be displayed.

## Login Functionality
+ Enter the username and password in the respective input fields.
+ Click on the "Login" button.
+ The form data will be sent to the server using a POST request to /login/.
+ If the provided credentials are valid, you will see a "Login successful" message.
+ If the credentials are invalid, you will see an "Invalid credentials" message.

## Notes
1. This is a simple demonstration of login functionality.
2. The database connection details are hardcoded in the main.py file for demonstration purposes. 
3. The 'mysql.connector' library is used in this project for MySQL database connection.
