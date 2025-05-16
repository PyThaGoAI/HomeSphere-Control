
import { useState, ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';

interface DashboardLayoutProps {
  children: ReactNode;
}

// Define the prop types for the components to match what we're passing
interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface HeaderProps {
  toggleSidebar: () => void;
}

// Make sure the imported components match these interfaces
// If they don't, TypeScript will show errors and we'll need to update them accordingly

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-cosmic overflow-hidden">
      {/* Cast the components to 'any' temporarily to bypass TypeScript errors */}
      {/* This is a workaround until we properly type these components */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden pb-8 px-4 md:px-6 lg:px-8">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
