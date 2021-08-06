import './App.css';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ListCohortsPage from './pages/ListCohortsPage';
import ListClassesPage from './pages/ListClassesPage';
import CreateClassesPage from './pages/CreateClassesPage';
import CreateCohortPage from './pages/CreateCohortPage';
import ViewCohortPage from './pages/ViewCohortPage';
import ViewClassPage from './pages/ViewClassPage';
import UpdateCohortPage from './pages/UpdateCohortPage';
import UpdateUserPage from './pages/UpdateUserPage';
import UpdateClassPage from './pages/UpdateClassPage';
import AdminPage from './pages/AdminPage';
import AdminCohortPage from './pages/AdminCohortPage';
import AdminUserPage from './pages/AdminUserPage';
import AttendPage from './pages/AttendPage';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Class Example</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/classes">Classes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/cohorts">Cohorts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin">Admin</a>
                </li>
              </ul>
              <form className="d-flex">

                <a className="btn btn-info mr-2" href="/login">Login</a>



                <a className="btn btn-info mr-2" href="/register">Register</a>

                <a className="btn btn-info mr-2" href="/users/update">Profile</a>

              </form>
            </div>
          </div>

        </nav>



        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          < Route path="/users/update" exact={true}>
            <UpdateUserPage />
          </Route>
          <Route path="/users/admin/:id" exact={true}>
            <AdminUserPage />
          </Route>
          <Route path="/admin" exact={true}>
            <AdminPage />
          </Route>
          <Route path="/cohorts/admin/:id" exact={true}>
            <AdminCohortPage />
          </Route>
          <Route path="/cohorts/update/:id" exact={true}>
            <UpdateCohortPage />
          </Route>
          <Route path="/cohorts/view/:id" exact={true}>
            <ViewCohortPage />
          </Route>
          <Route path="/cohorts/create" exact={true}>
            <CreateCohortPage />
          </Route>
          <Route path="/cohorts" exact={true}>
            <ListCohortsPage />
          </Route>
          <Route path="/classes/view/:id" exact={true}>
            <ViewClassPage />
          </Route>
          <Route path="/classes/attend/:id" exact={true}>
            <AttendPage />
          </Route>
          <Route path="/classes/update/:id" exact={true}>
            <UpdateClassPage />
          </Route>
          <Route path="/classes/create" exact={true}>
            <CreateClassesPage />
          </Route>
          <Route path="/classes" exact={true}>
            <ListClassesPage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
