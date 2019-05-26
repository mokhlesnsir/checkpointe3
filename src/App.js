

import React, {Component} from 'react';
import IdBox from './componnets/IdBox';
import './App.css';

class App extends Component {
  render (){
  return (
    <div className="App">
      <div style={{backgroundColor:"gray"}} >
      <h1 style={{textAlign:"center"}}> Animals </h1>

      <IdBox image="https://www.niabizoo.com/wp-content/uploads/2018/05/ms-animals-habitats-mammals.jpg" description="tha3lib" backgroundColor="red"  title="Animal"></IdBox>
      <IdBox image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhaWClUF-iOEsVOSiUMohag_X5jl1QonELiwsBoz1dw--FBeaFA" backgroundColor="purple" description=" 9ird w kalb hhh"  title="Animal"></IdBox>
      <IdBox image="https://aldf.org/wp-content/uploads/fly-images/4819/iStock-637686878-16x9-640x360-c.jpg" backgroundColor="red" description="9ird wahid a5or hhh"  title="Animal"></IdBox>
      <IdBox image="http://www.bhmpics.com/walls/running_panther-wide.jpg" backgroundColor="blue" description="nimir hhh"  title="Animal"></IdBox>
      </div>

    </div>
    
  );
  }
}

export default App;
