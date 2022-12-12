import React from 'react';
import Button,{ButtonType,ButtonSize} from './components/Button/button'
import Alert,{AlertType} from './components/Alert/alert';
function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Alert title={'alert'} description={'description'} closeable></Alert>
      <Button onClick={()=>{
        console.log(123)
      }}>Hellow</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hellow</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com'>Baidu Link</Button>
      </header>
    </div>
  );
}

export default App;
