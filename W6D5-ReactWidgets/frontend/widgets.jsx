import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

// The Root component should be a functional component because it won't use internal state or any lifecycle methods.

function Root() {
  return (
    <div>
      <Clock />
      
    </div>);
}

//widgets.jsx should have a DOMContentLoaded listener that calls ReactDOM.render()
//with a Root component and a main DOM element as the hook.
document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('main');
  ReactDOM.render(<Root/>, main);
});
