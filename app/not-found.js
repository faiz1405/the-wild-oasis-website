import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-4xl font-bold text-primary-50 mb-4">
        Page Not Found
      </h2>
      <p className="text-xl text-primary-300 mb-8">
        Sorry, we couldn't find the page you were looking for.
      </p>
      <Link
        href="/"
        className="bg-accent-500 rounded-xl px-8 py-4 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
