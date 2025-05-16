
import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeProvider } from '@/contexts/ThemeContext';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
          <Header />
          <div className="flex flex-1 overflow-hidden w-full">
            <Sidebar />
            <main className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col w-full max-w-full">
              <div className="stars-container absolute inset-0 overflow-hidden z-0 pointer-events-none">
                {Array.from({ length: 150 }).map((_, i) => (
                  <div
                    key={i}
                    className="star"
                    style={{
                      width: `${Math.random() * 2 + 1}px`,
                      height: `${Math.random() * 2 + 1}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                    }}
                  />
                ))}
                {/* Meteors */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={`meteor-${i}`}
                    className="absolute h-0.5 w-20 bg-white/30 animate-meteor"
                    style={{
                      top: `${Math.random() * 80}%`,
                      left: `${Math.random() * 100 + 100}px`,
                      animationDelay: `${Math.random() * 10 + i * 2}s`,
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10 flex-1 max-w-full w-full">
                {children}
              </div>
              <Footer />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default DashboardLayout;
