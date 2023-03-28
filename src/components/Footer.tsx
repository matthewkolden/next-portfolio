export default function Footer() {
  return (
    <footer className="container mx-auto flex justify-center flex-col items-center h-60 gap-10">
      <nav>
        <ul className="flex gap-6">
          <li>
            <a href='#'>
              <svg></svg>
            </a>
          </li>
          <li>
            <a href='#'>
              <svg></svg>
            </a>
          </li>
          <li>
            <a href='#'>
              <svg></svg>
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-sm text-slate-500">&copy; 2023 Matthew Kolden.</p>
    </footer>
  );
}