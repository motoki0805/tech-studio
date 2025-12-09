export const MaintenanceTemplate = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-6xl animate-bounce">🚧</div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Coming Soon
        </h1>

        <div className="space-y-2 text-gray-600">
          <p>
            現在、サイトのリニューアル準備中です。
            <br />
            公開まで今しばらくお待ちください。
          </p>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="font-semibold text-sm text-gray-500">
            テック工房 / Tech Studio
          </p>
        </div>
      </div>
    </div>
  );
};
