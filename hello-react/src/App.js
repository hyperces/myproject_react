import React from 'react';
import ScrollBox from './ScrollBox';
import './App.css'

const App = () => {
  return (
    <div>
      <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
      <button onClick={()=>this.ScrollBox.scrollToBottom()}
      맨 밑으로/>
    </div>
  )
};

export default App;