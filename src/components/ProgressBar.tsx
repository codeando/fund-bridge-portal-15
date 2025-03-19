
import React, { useEffect, useRef } from 'react';
import { DollarSign } from 'lucide-react';

interface ProgressBarProps {
  raised: number;
  goal: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ raised, goal }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);
  
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.setProperty('--progress-width', `${percentage}%`);
    }
  }, [percentage]);

  return (
    <div className="animate-on-load animate-delay-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="bg-ftblue/10 p-2 rounded-full mr-3">
            <DollarSign className="h-6 w-6 text-ftblue" />
          </div>
          <div>
            <div className="font-display font-bold text-2xl">${raised.toLocaleString()}</div>
            <div className="text-sm text-gray-500">raised of ${goal.toLocaleString()} goal</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-display font-bold text-xl">{percentage}%</div>
          <div className="text-sm text-gray-500">funded</div>
        </div>
      </div>
      
      <div className="progress-bar-container backdrop-blur">
        <div 
          ref={progressRef}
          className="progress-bar-fill"
        />
      </div>
      
      <div className="mt-6 text-center">
        <button className="bg-ftblue text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-ftblue-dark transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
