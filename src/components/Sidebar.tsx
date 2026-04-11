import type { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  activeId: number;
  onSelect: (id: number) => void;
}

export default function Sidebar({ categories, activeId, onSelect }: SidebarProps) {
  return (
    <aside className="w-56 flex-shrink-0 bg-white rounded-2xl shadow-sm border border-rose-50 overflow-hidden">
      <div className="px-4 py-4 border-b border-rose-50 bg-rose-50">
        <h2 className="text-sm font-semibold text-rose-700 uppercase tracking-wide">蛋糕分类</h2>
      </div>
      <nav className="py-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all group
              ${activeId === cat.id
                ? 'bg-rose-500 text-white'
                : 'text-gray-700 hover:bg-rose-50 hover:text-rose-600'
              }`}
          >
            <span className="text-xl leading-none">{cat.icon}</span>
            <div className="min-w-0">
              <p className={`text-sm font-medium truncate ${activeId === cat.id ? 'text-white' : ''}`}>
                {cat.name}
              </p>
              <p className={`text-xs truncate mt-0.5 ${activeId === cat.id ? 'text-rose-200' : 'text-gray-400'}`}>
                {cat.description}
              </p>
            </div>
            {activeId === cat.id && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}
