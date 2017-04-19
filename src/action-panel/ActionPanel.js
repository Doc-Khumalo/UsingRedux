import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import css from './ActionPanel.css';

const App = () => (
    <div className="wrapper">
        <div className="user-list">
            <UserList />
        </div>
        <div className="user-details">
            <UserDetails />
        </div>
    </div>
);

export default App;