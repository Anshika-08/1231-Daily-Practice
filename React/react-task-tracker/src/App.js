// import logo from './logo.svg';
// import './App.css';
// import Header from './component/Header';
// // const name= "Anshika";
// // const x = true;

// // function App() {
// //   return (
// //   <div className="container">
// //     <h1>{name}</h1>
// //   <h1>Hello from React</h1>
// //   <h2>{55+6}</h2>
// //   <h2>{x? "Yes" : "No"}</h2>
// //   </div>
// //   );
// // }
// function App() {
//   return (
//     <div className='container'>
//     <Header title={12}/>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import Header from './component/RegistrationComponent';
// import L1 from './component/LoginComponent';
// import W1 from './component/WelcomeComponent';
// function App() {
//   return(
//     <div className='conatiner'>
//       <Header Name= "Anshika" Age = "19" Address = "Chitkara" Username = "Aggarwal" Password = "1231" />
//       <L1 Username= "Aggarwal" Password= "1231" />
//       <W1 title = "Welcome User"></W1>
//     </div>
//   )
// }
// export default App;

import'./App.css';
import Header from './component/Header';

function App() {
  return (
    <div className='container'>
      <Header title={'Task Tracker'}/>
    </div>
  );
}
export default App;
