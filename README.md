# CarCar

Team:

* John Agni - Sales Microservice/Inventory Lists
* Charlene Xu - Service Microservice/Inventory Forms

## Design

![Diagram](project-diagram.png)

![Network](docker-network.png)

* Front-end: We use React to create a front-end application that uses the RESTFUL APIs.
* Back-end: We use Django framework to create RESTful APIs in microservices.

## Instructions to run the project

1. Go to https://gitlab.com/charlene.xu92/project-beta for the repo.
2. Select the Clone option and copy the URL under HTTPS.
3. In your terminal, enter `cd` to your projects directory.
4. Enter the command: `git clone https://gitlab.com/charlene.xu92/project-beta`.
5. After the project is cloned, `cd` to the newly cloned project directory.
6. Make sure you have your Docker Desktop installed and up.
7. In your terminal, run following commands:
    ```
    docker volume create project-beta
    docker-compose build
    docker-compose up
    ```
8. Visit http://localhost:3000 in the browser.

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
