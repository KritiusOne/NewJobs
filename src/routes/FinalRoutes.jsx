import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import SearchWork from "../page/SearchWork"

export const RoutesTypes = {
  "HOME": "/",
  "SEARCH_WORK": "/work/:id"
}
export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesTypes.HOME} element={<App />} />
        <Route path={RoutesTypes.SEARCH_WORK} element={<SearchWork />} />
      </Routes>
    </BrowserRouter>
  )
}
