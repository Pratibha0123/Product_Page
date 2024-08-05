
import {  Router, Route, Routes, HashRouter } from 'react-router-dom';
import Product_page from './Components/Product_Page/Product_page';
// import YourSizeModal from "./Components/YourSizeModal/YourSizeModal"

import EditProfilePage from './Components/EditProfilePage/EditProfilePage'; 



const App = () => {
  return (
   <>
   <HashRouter>
      <Routes>
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/" element={<Product_page />} />
      </Routes>
    </HashRouter>
   </>
  )
}

export default App