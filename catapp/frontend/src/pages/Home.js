import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Routes, Route } from 'react-router-dom';

import '../App.css';
import Footer from '../components/Footer/Footer';
import SideNewsSection from '../components/SideNewsSection/SideNewsSection';
import MainNewsSection from '../components/MainNewsSection/MainNewsSection';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Header from '../components/Header/Header';
import ArticleContent from '../components/ArticleContent/ArticleContentPage';

function App() {
// <<<<<<< HEAD

//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const handleLogin = () => {
//         setIsLoggedIn(true);
//     };
//     const handleLogout = () => {
//         setIsLoggedIn(false);
//     };

//     return (
//         <div className="App">
//             <Header className="App-header" />

//             <NavigationBar />
//             <div className="news-container">
//                 <SideNewsSection />
//                 <MainNewsSection>
//                     <Router>
//                         <div>
//                             {!isLoggedIn ? (
//                                 <form onSubmit={handleLogin}>
//                                     <input type="text" placeholder="Username" />
//                                     <input type="password" placeholder="Password" />
//                                     <button type="submit">Log In</button>
//                                 </form>
//                             ) : (
//                                 <button onClick={handleLogout}>Log Out</button>
//                             )}
//                             <Route path="/mainArticle" render={(props) => <ArticleContent isLoggedIn={isLoggedIn} {...props} />} />
//                         </div>

//                     </Router>
//                 </MainNewsSection>


//             </div>
//             <Footer />
// =======
    return (
        <div className="App">
        <Header className="App-header"/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <NavigationBar />
        <div className="news-container">
            <SideNewsSection />
            <MainNewsSection>
            <Routes>
                    <Route path="/mainArticle" component={ArticleContent} />
                </Routes>
            </MainNewsSection>
        </div>
        <Footer />


        </div>
    );
}

export default App;