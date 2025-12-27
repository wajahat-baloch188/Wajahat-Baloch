export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center">
      {/* Minimal spinner-only loading screen */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-primary-200 dark:border-primary-900 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
