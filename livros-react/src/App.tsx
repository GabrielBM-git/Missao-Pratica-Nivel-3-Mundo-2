// // App.tsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LivroLista from "./LivroLista";
// import LivroDados from "./LivroDados";

// function App() {
//     return (
//         <Router>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link to="/" className="nav-link" aria-current="page">Lista de Livros</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/dados" className="nav-link">Dados do Livro</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//             <Routes>
//                 <Route path="/" element={<LivroLista />} />
//                 <Route path="/dados" element={<LivroDados />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;



// // App.tsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LivroLista from "./LivroLista";
// import LivroDados from "./LivroDados";

// function App() {
//     return (
//         <Router>
//             <nav className="navbar">
//               <div className="container-fluid">
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                       <a className="nav-link active" aria-current="page" href="#">Home</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link" href="#">Link</a>
//                     </li>
//                 </ul>
//               </div>
//                 {/* <ul>
//                     <li>
//                         <Link to="/">Lista de Livros</Link>
//                     </li>
//                     <li>
//                         <Link to="/dados">Dados do Livro</Link>
//                     </li>
//                 </ul> */}
//               </div>
//             </nav>
//             <Routes>
//                 <Route path="/" element={<LivroLista />} />
//                 <Route path="/dados" element={<LivroDados />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand bg-dark border-bottom border-body" data-bs-theme="dark">
              <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link link">Catálogo</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dados" className="nav-link link">Novo</Link> 
                    </li>
                </ul>
              </div>
            </nav>
            <div className="container">
              <Routes>
                  <Route path="/" element={<LivroLista />} />
                  <Route path="/dados" element={<LivroDados />} />
              </Routes>
            </div>
        </Router>
    );
}

export default App;

// // App.tsx
// import React from "react";
// import LivroLista from "./LivroLista";

// function App() {
//     return <LivroLista />;
// }

// export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
