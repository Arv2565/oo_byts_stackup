import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ height: '100vh' }}>
      <div class="h-screen overflow-hidden">
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <div className="text-3xl font-semibold">Taskmaster</div>
        <Link className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out" href="/login">
          Login
        </Link>
      </div>


      <div className="flex justify-center items-center mb-4 h-screen">

        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-6 px-14 rounded-full transition duration-300 ease-in-out relative top-1/4" href="/signup">
          Unlock Your Productivity Potential!
        </Link>
      </div>
      </div>
    </main>
  );
}
