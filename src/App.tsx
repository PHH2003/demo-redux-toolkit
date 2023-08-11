import {Routes, Route} from "react-router-dom"
import ListProduct from "./components/ListProduct"
import AddProduct from "./components/AddProduct"
import UpdateProduct from "./components/UpdateProduct"

function App() {


  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<ListProduct/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route index element={<ListProduct/>}/>
          <Route path="/edit">
            <Route path=":id" element={<UpdateProduct/>} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
