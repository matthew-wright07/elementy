import { create } from "zustand";
const VITE_API_URL = import.meta.env.VITE_API_URL;
const VITE_LANDER_URL = import.meta.env.VITE_LANDER_URL;


type SavedItem = {
  data: string;
  code: string;
};

type User = {
  email: string;
  name: string;
  saved: SavedItem[];
  plan: string;
};

type UserStore = {
  user: User;
  loaded: boolean;
  fetchUser: () => Promise<void>;
};

const DefaultUser: User = {
  email: "",
  name: "",
  saved: [],
  plan: "free",
};

export const useUserStore = create<UserStore>((set) => ({
  user: DefaultUser,
  loaded: false,

  fetchUser: async () => {
    try{
    const res = await fetch(VITE_API_URL + "/auth/getuser", {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    set({
      user: data.user
    });
    set({loaded:true})
  }catch{
    window.location.href = VITE_LANDER_URL;
  }
  },
}));

