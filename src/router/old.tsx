import App from "@/App";
import Home from '@/views/home'
import About from '@/views/about'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// 两种模式 BrowserRouter（history）， HashRouter（Hash模式）




const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Navigate to='/home' />} ></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter