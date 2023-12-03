import { Link, useRouteError } from 'react-router-dom'
import type { ReactElement } from 'react'

export default function ErrorPage(): ReactElement {
  const error = useRouteError()
  console.error(error)

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Your dumbass went to a page we haven&apos;t developed.</p>
      <Link to='/'>Go back to the main site, dummy.</Link>
    </div>
  )
}
