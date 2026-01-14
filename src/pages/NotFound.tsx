const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">Page Not Found</p>
        <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
      </div>
    </main>
  );
};

export default NotFound;