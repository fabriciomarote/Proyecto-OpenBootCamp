import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import ContactComponent from './components/pure/contact';
import { Contact } from './/models/contact.class';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name={'Fabricio'}></Greeting>*/}
        {/*<Greetingf name={'Fabricio'}></Greetingf>*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        <ContactComponent contact={new Contact("Alejandro", "Britez", "alebritez@gmail.com", true)}></ContactComponent>
      </header>
    </div>
  );
}

export default App;

//