import { Routes, Route } from 'react-router-dom'
import HomePage from "../components/pages/HomePage"
import CreatePage from "../components/pages/CreatePage"
import SavedPage from "../components/pages/SavedPage"
import AuthPage from "../components/pages/AuthPage"
import UpgradePage from "../components/pages/UpgradePage"
import { useEffect } from 'react';
import { useUserStore } from '../utils/store';

export default function App() {
  const fetchUser = useUserStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();  // runs once on app load
  }, [fetchUser]);
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/create" element={<CreatePage/>} />
      <Route path="/saved" element={<SavedPage/>} />
      <Route path="/auth" element={<AuthPage/>} />
      <Route path="/upgrade" element={<UpgradePage/>} />
    </Routes>
  )
}