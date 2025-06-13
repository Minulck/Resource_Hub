export const ResourceCard = ({ title, total, highPriority, progress }) => {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
        <h3 className="font-medium mb-4">{title}</h3>
        <div className="h-2 bg-gray-200 rounded-full mb-4">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-green-500 rounded-full" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total: {total}</span>
          <span className="text-gray-600">High Priority: {highPriority}</span>
        </div>
      </div>
    );
  };
  