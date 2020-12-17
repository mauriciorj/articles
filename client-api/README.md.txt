# Postgres and Docker

## Docker
1 - Instructions to download and install docker: https://www.docker.com

## Postgres
1 - Open Docker terminal</br>
2 - run: ```docker pull postgres```</br>
3 - After image installation, open the terminal and run the command: ```docker run -d -p 5432:5432 --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword postgres```</br>
* change the 'my-postgres' and 'mysecretpassword' with name and password you want</br>
4 - To access the posgres bash, run on terminal: docker exec -it some-postgres psql -U postgres</br>
* Where some-postgres is the name of container and postgres is the default username</br>
5 - To access the database, run: \c database username
6 - To list tables, run: \dt


### Postgres Graph Admin Tool -> https://www.pgadmin.org/

## Sequelize
Install -> npm install -g sequelize-cli</br>
Documentation -> https://sequelize.org/v5/</br>

### The tables will be created automatically by Sequelize