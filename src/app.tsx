import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import EcoloCrimes from './routes/ecolo-crimes'
import Root from './routes/root'

const router = createBrowserRouter([
  {
    path: '/puyo-gateway/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/puyo-gateway/ecolo-crimes/:dumbassId',
        element: <EcoloCrimes />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
