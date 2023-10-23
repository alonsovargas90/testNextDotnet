import Link from 'next/link';

const Menu = () => {
  return (
    <nav className='bg-blue-500 h-16'>
      <ul className='flex h-16 justify-items-start flex-row gap-5 items-center px-10'>
        <li>
          <Link href="/" className='text-white'>
           List Users
          </Link>
        </li>
        <li>
          <Link href="/add-user" className='text-white'>
            Add User
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;