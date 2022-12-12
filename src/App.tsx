import React from 'react';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex='0' mode='vertical' onSelect={(index)=>{console.log(index)}} defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool1
          </MenuItem>
          <MenuItem>
            cool2
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool3
          </MenuItem>
        </Menu>


      </header>
    </div>
  );
}

export default App;
