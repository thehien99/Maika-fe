import { Route, Routes } from "react-router-dom"
import Home from "./layout"
import router from "./configrouter/router"
import Auth from "../src/pages/auth"
import { Header } from "./layout/header/header"
import Dashboard from "./dashboard/dashboard"
function App() {
  return (
    <Routes>
      <Route path={router.home} element={<Home />} />
      <Route path={router.login} element={<Auth />} >
      </Route>
      <Route path={router.dashboard} element={<Dashboard />} />
    </Routes>

  )
}

export default App
