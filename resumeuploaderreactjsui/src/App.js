import Navbar from './components/navbar/Navbar';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import './App.css'
import UserList from './components/dashboard/UserList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/aboutPage/About';
import User from './components/userPage/User';


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<UserList />} />
                    <Route path='/form' element={<RegistrationForm />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/user/:id/' element={<User />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
