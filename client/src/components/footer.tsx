export default function Footer(){
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} RevigoreLife. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="/privacy" className="underline">Privacy</a>
          <a href="/disclosures" className="underline">Disclosures</a>
        </nav>
      </div>
    </footer>
  )
}
