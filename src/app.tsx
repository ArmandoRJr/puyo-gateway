import { RouterProvider } from 'react-router'
import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import EcoloCrimes from './routes/ecolo-crimes'
import Root from './routes/root'
const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/ecolo-crimes',
        element: <EcoloCrimes />,
      },
    ],
  },
])

const App = () => {
  return (
    // <BrowserRouter basename="/puyo-gateway">
    //   <Routes>
    //     <Route path="/" element={<Root />}>
    //       <Route path="/ecolo-crimes" element={<EcoloCrimes />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  )
}

export default App
