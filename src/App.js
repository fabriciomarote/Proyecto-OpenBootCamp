import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import ContactComponent from './components/pure/contact';
import { Contact } from './/models/contact.class';
import Example1 from './hooks/example1';
import Example2 from './hooks/example2';
import MiComponenteConContexto from './hooks/example3';
import Example4 from './hooks/example4';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './hooks/lifeCycle/Clock'
import ClockFuncional from './hooks/lifeCycle/ClockFuncional';
import Father from './components/container/father';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<Greeting name={'Fabricio'}></Greeting>*/}
        {/*<Greetingf name={'Fabricio'}></Greetingf>*/}
        {/*<ContactComponent></ContactComponent>*/}
        {/*<Example1></Example1>*/}
        {/*<Example2></Example2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        {/*<Example4 nombre={'Fabricio'}>
          <h3>Contenido del props.children</h3>
        </Example4>*/}
        {/*<GreetingStyled name='Fabricio'></GreetingStyled>*/}
        {/*<Clock></Clock>*/}
        {/*<ClockFuncional></ClockFuncional>*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        <ContactListComponent></ContactListComponent>
        {/*<Father></Father>*/}
     {/* </header>*/}
    </div>
  );
}

export default App;

//