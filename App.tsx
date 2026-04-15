import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TaskList from './components/TaskList';
import KPIView from './components/KPIView';
import MasterData from './components/MasterData';
import { 
  Bell, 
  Search, 
  Menu, 
  X,
  Calendar as CalendarIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'tasks':
        return <TaskList />;
      case 'kpi':
        return <KPIView />;
      case 'master-data':
        return <MasterData />;
      case 'users':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
            <p>Chức năng quản lý nhân sự đang được phát triển.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#f0f2f5] overflow-hidden font-sans">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-[60px] bg-[#1a3a5f] text-white flex items-center justify-between px-6 shrink-0 z-10 shadow-md">
          <div className="flex items-center gap-4 flex-1">
            <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            <div className="flex items-center gap-3">
              <span className="bg-[#f27d26] text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                Phòng Kỹ Thuật
              </span>
              <h1 className="text-lg font-bold tracking-tight hidden sm:block">
                QUẢN LÝ VẬN HÀNH & BẢO TRÌ CÁP TREO
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[13px]">
            <div className="hidden lg:flex items-center gap-2">
              Tuyến: <strong className="text-[#f27d26]">Tuyến 01 (Linh Anh)</strong>
            </div>
            <div className="hidden md:flex items-center gap-2">
              Hôm nay: <strong>{format(new Date(), "dd/MM/yyyy")}</strong>
            </div>
            
            <div className="flex items-center gap-3 border-l border-white/20 pl-6">
              <div className="text-right hidden sm:block">
                <p className="font-bold leading-none">Admin</p>
                <p className="text-[10px] opacity-70 mt-1">Trần Văn A</p>
              </div>
              <div className="w-8 h-8 rounded bg-[#f27d26] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-5 bg-[#f8f9fa]">
          <div className="max-w-full mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
