import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
// @ts-ignore
import Footer from './components/Footer';

export default function App() { return <BrowserRouter><Routes><Route path="/" element={<Login/>}/><Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/><Route path="*" element={<Login/>}/></Routes></BrowserRouter>; }
