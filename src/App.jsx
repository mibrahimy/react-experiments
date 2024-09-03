
import Button from "./Button"

function onClick(){
 console.log(`Button  clicked`)
}

function App() {

  return (
    <>
<Button color='btn-primary' text='this is my button' onClick={onClick}></Button>
<Button color='btn-danger' text='this is my second button' onClick={onClick}></Button>

    </>

  );
}

export default App
