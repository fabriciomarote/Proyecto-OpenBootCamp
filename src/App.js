import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import Greeting from './components/pure/greeting'
import Greetingf from './components/pure/greetingF';
import ContactListComponent from './components/container/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name={'Fabricio'}></Greeting>*/}
        {/*<Greetingf name={'Fabricio'}></Greetingf>*/}
        <ContactListComponent></ContactListComponent>
        {/*<TaskListComponent></TaskListComponent>*/}
      </header>
    </div>
  );
}

export default App;

//