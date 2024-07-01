# Working with React Hook Form

-   Create the app

```
npx create-react-app react-hook-form-example
```

-   Change directory to the project

```
cd react-hook-form-example
```

-   Delete src folder and copy `supplied-files`
-   Copy over the following to `package.json` `dependencies` (append them, not replace)

```json
"@fortawesome/fontawesome-svg-core": "^6.2.1",
"@fortawesome/free-regular-svg-icons": "^6.2.1",
"@fortawesome/free-solid-svg-icons": "^6.2.1",
"@fortawesome/react-fontawesome": "^0.2.0",
"@hookform/error-message": "^2.0.1",
"axios": "^1.2.1",
"bootstrap": "^5.2.3",
"moment": "^2.29.4",
"react-bootstrap": "^2.7.0",
"react-hook-form": "^7.52.0",
"react-moment": "^1.1.2",
"react-router": "^5.3.4",
"react-router-dom": "^5.3.4",
"react-select": "^5.8.0",
"react-toastify": "^9.1.1",
"@types/react-router": "^5.1.19",
"@types/react-router-dom": "^5.3.3"
```

-   Install packages whose entries were added above

```
npm i
```

-   Note that we have installed the form validation library - React Hook Form as well.
-   Instructor shall provide further steps to first complete the AddSession component first, and AddWorkshop component next. While doing this take help from the `*.final.jsx` files
