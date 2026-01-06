"use client";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#020617]">
      <div className="container mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">

        {/* LEFT */}
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-slate-900 dark:text-white">
            Rida Farhin
          </span>
          . All rights reserved.
        </p>

        {/* RIGHT */}
        <p className="tracking-wide">
          Built with <span className="text-blue-600">Next.js</span> &{" "}
          <span className="text-blue-600">Tailwind CSS</span>
        </p>

      </div>
    </footer>
  );
}
