import Link from 'next/link'

export default function Home() {
  return (
    <main><div class="bg-gray-800 text-white p-4 flex items-center justify-between">

    <div class="text-3xl font-semibold">Taskmaster</div>
    <Link class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out " href="/login">
      Login
    </Link>
  </div>
  
  <div class="flex justify-center items-center h-screen">
  <Link class='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-6 px-14 rounded-full transition duration-300 ease-in-out' href="/signup">

Unlock Your Productivity Potential!
  </Link>
</div>

  </main>
  )
}
