import { Link } from "wouter";
export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">404 — Not found</h1>
      <p className="mt-2"><Link href="/" className="underline">Go home</Link></p>
    </main>
  );
}
