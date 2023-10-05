'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>3Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}