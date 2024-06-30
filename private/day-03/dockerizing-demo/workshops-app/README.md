# Dockerizing the app

-   Create Dockerfile

```
FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

-   Add .dockerignore

```
node_modules
# .env
# .env.*
```

-   Build the Docker image

```
docker build -t workshops-app:dev build .
```

-   Run a container

```
docker run -p 3000:3000 workshops-app:dev
```

-   Install Acorn from instructions in https://docs.acorn.io/
-   Create Acornfile

```
containers: app:{
    build:{
        context:"."
    }
    ports: publish: "5173/http"
    if args.dev {
        dirs:{
            "/app":"./"
        }
    }
}
```

-   Login to Acorn
-   Run Acorn - you may want to delete `node_modules` before running it.

```
acorn run -i -n app .
```
