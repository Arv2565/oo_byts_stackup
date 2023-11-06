import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h2> Uh-Oh! We couldn&rsquo;t find the page you were looking for.</h2>
      <Link className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-6 px-14 rounded transition duration-300 ease-in-out m-3' href="/">Return Home</Link>
    </div>
  )
}