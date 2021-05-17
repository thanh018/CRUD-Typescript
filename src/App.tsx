import React from 'react';
import './App.css';
import Counter from './components/Counter/index';
import EmployeeManagement from './components/EmployeeManagment/index';
import SideBar from './components/SideBar/index';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { StyledMainContent } from './styled';

function App() {
  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={1500}
      placement="top-right"
    >
      <div>
        <Router>
          <div>
            <SideBar />
            <StyledMainContent>
              <Switch>
                <Route exact path="/">
                  <Counter />
                </Route>
                <Route path="/employee-management">
                  <EmployeeManagement />
                </Route>
              </Switch>
            </StyledMainContent>
          </div>
        </Router>
      </div>
    </ToastProvider>
  );
}

export default App;
