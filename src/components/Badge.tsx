import React from 'react';
import { Settings } from 'lucide-react';

const Badge: React.FC = () => {
  return (
    <div className="inline-flex items-center px-4 py-1.5 bg-[#333333]/80 rounded-full backdrop-blur-sm">
      <Settings className="w-4 h-4 text-white mr-2" />
      <span className="text-white text-sm">Introducing Exposure Command</span>
    </div>
  );
}

export default Badge;