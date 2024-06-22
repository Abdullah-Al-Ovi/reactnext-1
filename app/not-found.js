"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
 
export default function NotFound() {
  const path = usePathname()
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find {path}</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}