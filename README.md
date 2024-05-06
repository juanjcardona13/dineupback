# DineUp Backend

This project is a Django backend for the DineUp project. It provides a GraphQL API for the frontend to interact with.
The stack used in this project is Django, Graphene-Django-CRUDDALS, and Django-GraphQL-JWT.

DineUp is a project that aims to provide a platform for view the details of a restaurant, such as its location, menu, and schedule. It also allows users to make reservations and rate the restaurant.

## Table of Contents

- [Installation](#installation)
- [License](#license)

## Installation

1. Make sure you have Python 3.10 installed. If not, you can download it from the [official Python website](https://www.python.org/downloads/).
2. Clone this repository to your local machine:

  ```bash
    git clone https://github.com/juanjcardona13/dineupback.git
  ```  
3. Navigate to the project directory:
  ```bash
    cd dineupback
  ```  
4. Create a virtual environment:
  ```bash
    python -m venv venv
  ```
5. Activate the virtual environment:
  - On Windows:
  ```bash
    venv\Scripts\activate
  ```
  - On macOS and Linux:
  ```bash
    source venv/bin/activate
  ```
6. Install the required dependencies using pip:
  ```bash
    pip install -r requirements.txt
  ```  
7. Apply migrations:
  ```bash
    python manage.py migrate
  ```  
8. Create a superuser:
  ```bash
    python manage.py createsuperuser
  ```
9. Load the initial data:
  ```bash
    python manage.py loaddata db.json
  ```
10. Start the development server:
  ```bash
    python manage.py runserver
  ```  
11. Visit http://127.0.0.1:8000/admin/ in your web browser to view the project or http://127.0.0.1:8000/api/ for you to play with the API using the GraphiQL interface.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.
