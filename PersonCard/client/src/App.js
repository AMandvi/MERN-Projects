import logo from './logo.svg';
import './App.css';
import PersonCards from './components/PersonCards';

function App() {
  return (
    <div className="App">
    <PersonCards firstName ={"Jane"} lastName = {"Doe"} age= {45} haircolor = {"black"}>
    </PersonCards>
    <PersonCards firstName ={"John"} lastName = {"Smith"} age= {88} haircolor = {"brown"}>
    </PersonCards>
    <PersonCards firstName ={"Millard"} lastName = {"Filmore"} age= {50} haircolor = {"brown"}>
    </PersonCards>
    <PersonCards firstName ={"Maria"} lastName = {"Smith"} age= {62} haircolor = {"brown"}>
    </PersonCards>
    </div>
  );
}

export default App;
