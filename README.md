# ing-software-p1-backend
## Requirements

To set up and run the backend of the "ing-software-p1-backend" project, the user must have the following installed:

1. **Node.js and npm**: Make sure you have Node.js installed on your system. npm comes included with Node.js, so you don't need to install it separately. You can download and install Node.js from its official website: [Node.js Downloads](https://nodejs.org/en/download/).

2. **PostgreSQL**: You must have PostgreSQL installed and configured on your system. You can download and install PostgreSQL from its official website: [PostgreSQL Downloads](https://www.postgresql.org/download/).

3. **Docker (optional)**: If you prefer to use Docker to run PostgreSQL in a container, you will need to have Docker installed on your system. You can download and install Docker from its official website: [Docker Downloads](https://www.docker.com/get-started).

Once you have Node.js/npm and PostgreSQL (or Docker if you prefer) installed, you can follow the provided setup and execution instructions

## Setup Instructions

1. Run `npm install` to install the required dependencies.

2. Create a `.env` file in the root of the project and add the following information with your specific values:

```plaintext
PORT=3003
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=
PG_USER=postgres
PG_PASSWORD=0
```

## Execution Instructions

Once you have completed the setup steps above, you can run the application with:

1. Set up the database schema by executing the following command in your terminal:

```bash
psql -f src/db/schema.sql
```

or in docker:

```bash
docker exec -i <container_name> psql -f src/db/schema.sql
```

2. Populate the database with seed data by executing the following command in your terminal:

```bash
psql -f src/db/seed.sql
```
or in docker:

```bash
docker exec -i <container_name> psql -f src/db/seed.sql
```


3. Finally, start the application by running:
   
for windows users:

```bash
npm start-windows
```

for linux and mac users:

```bash
npm start-linux-mac
```

Ensure that PostgreSQL is installed and properly configured on your system for the database commands to work.

Now you should have your application up and running!
