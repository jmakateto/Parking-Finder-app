**GitHub Documentation - Flask Application Setup with Database Initialization**

### Introduction
This documentation provides step-by-step instructions for setting up and running a Flask application, including database initialization using the provided code. Follow these guidelines to configure your environment, initialize the database, and launch the application successfully.

### Prerequisites
Ensure that you have the following prerequisites installed on your system:
- [Python](https://www.python.org/) (3.6 or later)
- [pip](https://pip.pypa.io/) (Python package installer)

### Setup Instructions

#### 1. Clone the Repository
Clone the repository to your local machine using the following command:

```bash
git clone <repository_url>
cd <repository_directory>
```

#### 2. Set Environment Variables
Set the necessary environment variables for Flask to configure the application. Execute the following commands in your terminal:

```bash
export FLASK_APP=server/main.py
export FLASK_ENV=development
export FLASK_RUN_PORT=5000
export FLASK_RUN_HOST=0.0.0.0
```

- `FLASK_APP`: Specifies the main application file.
- `FLASK_ENV`: Sets the environment to development for automatic reloading on code changes.
- `FLASK_RUN_PORT`: Defines the port on which the Flask application will run (default is 5000).
- `FLASK_RUN_HOST`: Specifies the host IP to run the application (0.0.0.0 makes it accessible externally).

#### 3. Initialize the Database
Initialize the database using Flask-Migrate. Execute the following commands:

```bash
flask db init
```

This command initializes the migration environment. You should see a new "migrations" directory created in your project.

#### 4. Migrate the Database
Apply the initial migration to create the database tables:

```bash
flask db migrate
flask db upgrade
```

#### 5. Install Dependencies
Install the required Python dependencies using the following command:

```bash
pip install -r requirements.txt
```

#### 6. Run the Flask Application
Start the Flask application using the following command:

```bash
flask run
```

### Accessing the Application
Once the application is running, you can access it in your web browser by navigating to [http://localhost:5000](http://localhost:5000). If you specified a different port, replace `5000` with the chosen port number.

### Development Mode
While in development mode, the application will automatically reload upon code changes, making it convenient for development and testing.

### Conclusion
You have successfully set up, initialized the database, and launched the Flask application. Refer to the application's specific documentation for further details on endpoints, features, and usage.

For additional support or inquiries, please consult the project's README or contact the project maintainers.

Thank you for using our Flask application!