import React, { Component } from 'react'
import './style/site.css'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import AdminRoute from './utils/AdminRoute'
import Navigation from './components/common/Navigation'
import RegisterPage from './components/user/RegisterPage'
import LoginPage from './components/user/LoginPage'
import GuestHomePage from './components/common/GuestHomePage'
import AccountPage from './components/user/AccountPage'
import Logout from './components/user/Logout'
import AddPhotoPage from './components/photos/AddPhotoPage'
import MyPhotos from './components/photos/MyPhotos'
import PhotoDetails from './components/photos/PhotoDetails'
import EditPhotoPage from './components/photos/EditPhotoPage'
import DeletePhoto from './components/photos/DeletePhoto'
import NotFoundPage from './components/common/NotFoundPage';
import Footer from './components/common/Footer';
import EditReview from './components/reviews/EditReview';
import DeleteReview from './components/reviews/DeleteReview';
import Users from './components/admin/Users';
import EditUser from './components/admin/EditUser';
import DeleteUser from './components/admin/DeleteUser';
import AccessDeniedPage from './components/common/AccessDeniedPage';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path='/' exact component={GuestHomePage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />
            <PrivateRoute path='/logout' component={Logout} />
            <PrivateRoute path='/home' component={AccountPage} />
            <PrivateRoute path='/add' component={AddPhotoPage} />
            <PrivateRoute path='/mine' component={MyPhotos} />
            <PrivateRoute path='/details/:id' component={PhotoDetails} />
            <PrivateRoute path='/photo/edit/:id' component={EditPhotoPage} />
            <PrivateRoute path='/photo/delete/:id' component={DeletePhoto} />
            <PrivateRoute path='/review/edit/:id' component={EditReview} />
            <PrivateRoute path='/review/delete/:id' component={DeleteReview} />
            <AdminRoute path='/users' component={Users} />
            <AdminRoute path='/user/edit/:id' component={EditUser} />
            <AdminRoute path='/user/delete/:id' component={DeleteUser} />
            <Route path='/access-denied' component={AccessDeniedPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
