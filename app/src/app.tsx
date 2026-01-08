import { Routes, Route } from 'react-router-dom'
import HomePage from "../components/pages/HomePage"
import CreatePage from "../components/pages/CreatePage"
import SavedPage from "../components/pages/SavedPage"
import UpgradePage from "../components/pages/UpgradePage"
import SettingsPage from "../components/pages/SettingsPage"
import AccountPage from "../components/pages/AccountPage"
import { useEffect } from 'react';
import { useUserStore } from '../utils/store';

export default function App() {
  const fetchUser = useUserStore((state) => state.fetchUser);
  const loaded = useUserStore((state) => state.loaded);

  useEffect(() => {
    fetchUser();  // runs once on app load
  }, [fetchUser]);

  if (!loaded) return null;
  
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/create" element={<CreatePage/>} />
      <Route path="/saved" element={<SavedPage/>} />
      <Route path="/upgrade" element={<UpgradePage/>} />
      <Route path="/settings" element={<SettingsPage/>} />
      <Route path="/account" element={<AccountPage/>} />
    </Routes>
  )
}