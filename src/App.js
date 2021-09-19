import {Route, Switch} from 'react-router-dom'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import HomePage from "./pages/home/HomePage";
import './app.css'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/users"  component={UserList}/>
        <Route path="/user/:id" component={User}/>
        <Route path="/newuser" component={NewUser}/>
        <Route path="/products" component={ProductList}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="/newProduct" component={NewProduct}/>
      </Switch>
      </div>
    </div>
  );
}

export default App;
