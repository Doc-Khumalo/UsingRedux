/* Feel free to edit */
import React from 'react';
import ActionPanel from './action-panel/ActionPanel';

export default function Layout({ children }) {
  return (
    <div>
      <div className="bui-app">
          <div className="bui-app-header"> 
            <h1 className="bui-app-intro">Table Reservations</h1>
          </div>
      </div>
      <ActionPanel />
    </div>
  );
}
