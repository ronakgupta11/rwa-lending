
import Link from "next/link"

export default function HomeCard({
  title,
  children,
  button,
  link
}) {
  return (
    <div className='bg-purple-200 -300 p-6 px-8 rounded-xl border border-solid border-slate-200'>
      <div className='text-xl font-extrabold tracking-wide text-slate-900'>
        { title }
      </div>
      <div className='mt-5'>
        { children }
      </div>
      <div className="flex justify-center">
        <button  className="mt-12 pt-2 pb-2 pl-3 pr-3 rounded-xl bg-purple-700 text-white">
          <Link href={link}>{ button }</Link>
        </button>
      </div>
    </div>
  )
}