# Dine Up Backend

This project is a Django backend for the Dine Up project. It provides a GraphQL API for the frontend to interact with.
The stack used in this project is Django, Graphene-Django-CRUDDALS, and Django-GraphQL-JWT.

## Table of Contents

- [Installation](#installation)
- [License](#license)

## Installation

1. Make sure you have Python 3.10 installed. If not, you can download it from the [official Python website](https://www.python.org/downloads/).
2. Clone this repository to your local machine:

  ```bash
    git clone https://github.com/username/project.git
  ```  
3. Navigate to the project directory:
  ```bash
    cd project
  ```  
4. Install the required dependencies using pip:
  ```bash
    pip install -r requirements.txt
  ```  
5. Apply migrations:
  ```bash
    python manage.py migrate
  ```  
6. Start the development server:
  ```bash
    python manage.py runserver
  ```  
7. Visit http://127.0.0.1:8000/admin in your web browser to view the project or http://127.0.0.1:8000/api-dine-up/ for you to play with the API using the GraphiQL interface.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.