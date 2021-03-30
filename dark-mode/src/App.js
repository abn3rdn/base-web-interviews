import React, { useState } from 'react';
import Logo from './logo';
import './App.css';

function App() {
  const [theme, setTheme] = useState('App');

  const toggle = () => {
    setTheme(() => {
      if(theme === 'App') {
        return 'App App--dark-theme'
      }
      return 'App';
    })
  };

  return (
    <div className={theme}>
      <div className="header">
        <Logo />
        <h1>A very magical Lorem Ipsum</h1>
        <Logo />
      </div>
      <div className="info">
        <div className="first">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium augue, eget lacinia velit. Nulla bibendum turpis ut maximus suscipit. Duis ultrices leo eget enim volutpat, sed fringilla metus imperdiet. Quisque rutrum, neque sit amet tempor venenatis, eros ex suscipit nisi, vel mattis leo urna id magna. Fusce sodales mauris sit amet mauris aliquet, et mollis eros efficitur. Duis porttitor odio in nibh semper, vitae luctus sem suscipit. Pellentesque congue faucibus sem et dictum.
        </div>
        <div className="second">
           Nullam eu lectus mattis, finibus nisi lacinia, accumsan augue. Vivamus sit amet ornare felis. Vestibulum eu vehicula ante, in euismod nulla. Donec non ipsum vehicula, dictum metus in, interdum magna. Proin pulvinar velit ut nulla convallis volutpat. Nam ut ligula eu dui mollis eleifend. In hac habitasse platea dictumst. Fusce pulvinar, urna in finibus volutpat, odio turpis venenatis arcu, ut mollis mi velit vestibulum lacus. Phasellus imperdiet non libero vitae scelerisque. Vivamus dignissim congue sodales. Nam eleifend ornare congue. Mauris et tortor sit amet elit feugiat pretium. Vestibulum tristique vitae ex molestie cursus.
        </div>
        <div className="third">
           Etiam varius tempor turpis vitae bibendum. In placerat dolor et odio dictum aliquam. Donec iaculis rhoncus elit vitae pretium. Nam finibus ac nulla vitae gravida. Duis blandit commodo libero, id vehicula turpis consequat vitae. Donec maximus maximus ullamcorper. Nunc accumsan eleifend urna.
        </div>
      </div>
      <div className="buttons">
        <button type="button" onClick={toggle}>Toggle Theme!</button>
      </div>
      <div>Wand icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>
    </div>
  );
}

export default App;
