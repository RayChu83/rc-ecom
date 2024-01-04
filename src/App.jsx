import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import {db} from "./config/Firebase"
import PageLayout from "./layouts/PageLayout"
import Home, {loader as subscriptionPlansLoader} from "./pages/Home"
import About from "./pages/About"
import Products, {loader as productsLoader} from "./pages/Products"
import ProductDetailed, {loader as productCollectionLoader} from "./pages/ProductDetailed"
import Subscriptions from "./pages/Subscriptions"
import SubscriptionDetailed, {loader as subscriptionCollectionLoader} from "./pages/SubscriptionDetailed"
import Contact, {loader as faqsLoader} from "./pages/Contact"
import Error from "./pages/Error"

import './App.css';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<PageLayout/>}>
      <Route index element={<Home/>} loader={() => subscriptionPlansLoader(db)}/>
      <Route path='about' element={<About/>}/>
      <Route path='products' element={<Products/>} loader={() => productsLoader(db)}/>
      <Route path='products/:title' element={<ProductDetailed/>} loader={() => productCollectionLoader(db)}/>
      <Route path='contact' element={<Contact/>} loader={() => faqsLoader(db)}/>
      <Route path='subscriptions' element={<Subscriptions/>} loader={() => subscriptionPlansLoader(db)}/>
      <Route path='subscriptions/:id' element={<SubscriptionDetailed/>} loader={() => subscriptionCollectionLoader(db)}/>
      <Route path='*' element={<Error/>}/>
    </Route>
  ))
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
