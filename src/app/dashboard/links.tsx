'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul className='test'>
      <li>
          <Link className={`link ${pathname === '/team' ? 'active' : ''}`} href="/team">
            Team
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/analytics' ? 'active' : ''}`} href="/analytics">
          Analytics
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/cart' ? 'active' : ''}`} href="/cart">
            Cart
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/blog' ? 'active' : ''}`} href="/blog">
          dynamic routing slug
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/dashboard' ? 'active' : ''}`}
            href="/dashboard"
          >
            dashboard
          </Link>
          </li>
          <li>
          <Link
            className={`link ${pathname === '/shop' ? 'active' : ''}`}
            href="/shop"
          >
            shop cach all segment
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/contact' ? 'active' : ''}`}
            href="/contact"
          >
            optional cach all segment
          </Link>
        </li>
      </ul>
    </nav>
  )
}

// next/link
{/* <Link href="/dashboard" scroll={false}>
  Dashboard
</Link> */}


// useRouter
// import { useRouter } from 'next/navigation'
 
// const router = useRouter()
 
// router.push('/dashboard', { scroll: false })