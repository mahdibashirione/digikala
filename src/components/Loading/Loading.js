const Loading = () => {
  return (
    <div className="fixed top-0 ring-0 w-screen glass h-screen bg-zinc-900/50 z-40 flex items-center justify-center" >
      <div className="md:w-64 md:h-44 w-60 h-40 bg-white flex flex-col items-center justify-around rounded-lg shadow border p-4">
        Loading...
        <span className="animate-spin w-10 h-10 rounded-full border-4 border-t-gray-300 border-gray-500"></span>
      </div>
    </div>
  );
}

export default Loading;