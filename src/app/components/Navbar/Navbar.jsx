import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">Aaush Nirmata</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/pagecommit">
              <h1 className="text-black hover:text-yellow-300">Page Commit</h1>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <h1 className="text-black hover:text-yellow-300">Product</h1>
            </Link>
          </li>
          <li>
            <Link href="/members">
              <h1 className="text-black hover:text-yellow-300">Members</h1>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <h1 className="text-black hover:text-yellow-300">About Us</h1>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h1 className="text-black hover:text-yellow-300">Contact Us</h1>
            </Link>
          </li>
        </ul>
        <div>
          <Link href="/login">
            <h1 className="text-black bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600">Login</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
