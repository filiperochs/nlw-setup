import './styles/global.css'
import './lib/dayjs'
import { Login } from './screens/Login'
import { Home } from './screens/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Home />
  },
]

const Router = createBrowserRouter(routes)

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <RouterProvider router={Router} />
      </div>
    </div>
  )
}
