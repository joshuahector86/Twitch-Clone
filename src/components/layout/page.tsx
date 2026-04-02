import Sidebar from "./sidebar";
import Topbar from "./topbar";

interface PageProps {
  children?: React.ReactNode;
}
const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="p-5 bg-bg text-white h-screen flex flex-col">
      <Topbar />

      <div className="grid grid-cols-[200px_1fr] gap-10 mt-10 flex-1 min-h-0">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Page;
