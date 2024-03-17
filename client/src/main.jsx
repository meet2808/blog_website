import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Addpost, Blog, Category, Home, SignIn, SignUp, Categories, Editpost } from "./pages"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store, persistor } from './app/store.js'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { AuthLayout } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/category/:slug/",
        element: <Category />,
      },
      {
        path: "/blog/:blogId",
        element: <Blog />
      },
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: "/addpost",
        element: (
          <AuthLayout>
            <Addpost />
          </AuthLayout>
        )
      },
      {
        path: "/updatepost/:id",
        element: (
          <AuthLayout>
            <Editpost />
          </AuthLayout>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
