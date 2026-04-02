import Sidebar from "./sidebar";
import Topbar from "./topbar";

interface PageProps {
  children?: React.ReactNode;
}
const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div>
      <Topbar />

      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Page;
