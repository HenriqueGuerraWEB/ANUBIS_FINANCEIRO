import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/react-app/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-300 ${
            theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-amber-400 transition-all duration-300 ${
            theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
          }`}
        />
      </div>
    </button>
  );
}
