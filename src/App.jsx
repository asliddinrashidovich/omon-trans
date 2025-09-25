import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/main-layout"
import HomePage from "./page/home-page"

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="uz" element={<HomePage/>}/>
        <Route path="ru" element={<HomePage/>}/>
        <Route path="en" element={<HomePage/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App