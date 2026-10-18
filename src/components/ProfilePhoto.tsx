import React from 'react';

export interface ProfilePhotoProps {
  variant?: 'hero' | 'contact' | 'avatar' | 'resume' | 'badge';
  className?: string;
  showStatusIndicator?: boolean;
  allowUpload?: boolean; // Kept for backwards compatibility without rendering any controls
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  variant = 'hero',
  className = '',
  showStatusIndicator = false,
}) => {
  // Dimensions based on variant
  const getContainerStyles = () => {
    switch (variant) {
      case 'hero':
        return 'w-64 h-80 sm:w-72 sm:h-92 md:w-80 md:h-96 rounded-2xl';
      case 'contact':
        return 'w-28 h-28 sm:w-36 sm:h-36 rounded-2xl';
      case 'resume':
        return 'w-24 h-30 sm:w-28 sm:h-34 rounded-xl';
      case 'badge':
        return 'w-12 h-12 rounded-xl';
      case 'avatar':
      default:
        return 'w-8 h-8 rounded-full';
    }
  };

  return (
    <div
      className={`relative select-none overflow-hidden border border-[#d2d2d7]/80 bg-[#f5f5f7] shadow-sm ${getContainerStyles()} ${className}`}
    >
      <img
        src="/priyanshu_photo.png"
        alt="Priyanshu Choudhary"
        className="w-full h-full object-cover object-top"
        referrerPolicy="no-referrer"
      />

      {/* Online Telemetry Radar Pulse Dot */}
      {showStatusIndicator && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 pointer-events-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28cd41] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#28cd41]"></span>
          </span>
          <span className="text-[10px] font-mono font-medium text-white tracking-wider">
            ONLINE
          </span>
        </div>
      )}

      {/* Subtle Verified SOC Ribbon on hero variant */}
      {variant === 'hero' && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3 pt-8 flex items-center justify-between text-white pointer-events-none">
          <div className="flex flex-col">
            <span className="text-[13px] font-semibold tracking-tight text-white flex items-center gap-1">
              Priyanshu Choudhary
              <span className="material-symbols-outlined text-[14px] text-[#0071e3]">verified</span>
            </span>
            <span className="text-[10.5px] text-white/80 font-mono">SOC Analyst • Offensive Sec</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;
