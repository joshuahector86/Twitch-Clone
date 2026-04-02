import Searchbar from "../ui/searchbar";
import Button from "../ui/button";
import IconButton from "../ui/icon-button";
import logo from "../../assets/purple_logo.jpg";
import { Bell, User } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-surface px-5 py-3 rounded-xl">
      <div className="text-text font-bold text-lg tracking-wide flex items-center space-x-2">
        <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
        <span className="text-primary/80 uppercase">Streamo</span>
      </div>
      <Searchbar />

      <div className="flex items-center space-x-2">
        <IconButton icon={Bell} label="Notifications" />
        <Button variant="ghost">Log in</Button>
        <Button variant="primary">Sign up</Button>
        <IconButton icon={User} label="Account" />
      </div>
    </div>
  );
};

export default Topbar;
