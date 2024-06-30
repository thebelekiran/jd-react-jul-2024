import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import Index from './routes/index';
import Contact, { loader as contactLoader, action as contactAction } from './routes/contact';
import EditContact, { action as editAction } from './routes/edit';
import { action as destroyAction } from './routes/destroy';
import ErrorPage from './error-page';
import DestroyErrorPage from './destroy-error-page';

import './index.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      loader: rootLoader,
      action: rootAction,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              path: '',
              // index: true,
              element: <Index />
            },
            {
              path: 'contacts/:contactId',
              element: <Contact />,
              loader: contactLoader,
              action: contactAction
            },
            {
              path: 'contacts/:contactId/edit',
              element: <EditContact />,
              loader: contactLoader,
              action: editAction
            },
            {
              path: 'contacts/:contactId/destroy',
              action: destroyAction,
              errorElement: <DestroyErrorPage />
            }
          ]
        }
      ]
    }
  ]
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Root />}
//       loader={rootLoader}
//       action={rootAction}
//       errorElement={<ErrorPage />}
//     >
//       <Route errorElement={<ErrorPage />}>
//         <Route
//           path=""
//           index={true}
//         />
//         <Route
//           path="contacts/:contactId"
//           element={<Contact />}
//           loader={contactLoader}
//         />
//         <Route
//           path="contacts/:contactId/edit"
//           element={<EditContact />}
//           loader={contactLoader}
//           action={editAction}
//         />
//         <Route
//           path="contacts/:contactId/destroy"
//           action={destroyAction}
//           errorElement={<DestroyErrorPage />}
//         />
//       </Route>
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
