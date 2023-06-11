import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Your dumbass went to a page we haven't developed.</p>
      <Link to="/puyo-gateway/">Go back to the main site, dummy.</Link>
    </div>
  )
}

export default ErrorPage
