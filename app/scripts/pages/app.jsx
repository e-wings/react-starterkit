import React from 'react';
import Header from '../../../common/component/ui/header.jsx'

const App = (props) => {
    return (
      <div>
        <Header />
        <div className="content">
          {props.children}
        </div>
      </div>
    );
};

export default App;