import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
// const name= "Anshika";
// const x = true;

// function App() {
//   return (
//   <div className="container">
//     <h1>{name}</h1>
//   <h1>Hello from React</h1>
//   <h2>{55+6}</h2>
//   <h2>{x? "Yes" : "No"}</h2>
//   </div>
//   );
// }
function App() {
  return (
    <div className='container'>
    <Header title={12}/>
    </div>
  );
}

export default App;
