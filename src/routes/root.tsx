import { Link, Outlet } from 'react-router-dom'
import type { ReactElement } from 'react'

export default function Root(): ReactElement {
  return (
    <>
      <div id='sidebar'>
        <h1>Puyo Gateway</h1>

        <div>
          <form id='search-form' role='search'>
            <input id='q' aria-label='Search contacts' placeholder='Search' type='search' name='q' />
            <div id='search-spinner' aria-hidden hidden />
            <div className='sr-only' aria-live='polite' />
          </form>
          <form method='post'>
            <button type='submit'>Search</button>
          </form>
        </div>

        <nav>
          <ul>
            <li>
              <Link to='/ecolo-crimes'>Countries where Ecolo is banned</Link>
            </li>
            <li>
              <Link to='/contacts/2'>Arle&apos;s Many Crimes</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}
