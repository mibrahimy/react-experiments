
import Button from "./Button"
import { useState } from 'react';
import Alert from "./Alert"
function App() {
  const [showAlert, setShowAlert] = useState(false);

  function handleClick() {
    setShowAlert(true);
    
    setTimeout(() => setShowAlert(false), 3000);
  }
  return (
    <>
      <Button color='btn-primary' text='this is my button' onClick={handleClick} />
      <Button color='btn-danger' text='this is my 2 button' onClick={handleClick} />
      {showAlert && <Alert/>}
    </>
  );
}

export default App;
