'use client'
import LayoutMain from '../../../layouts/LayoutMain';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'
import AddUserForm from '../../../components/AddUserForm/AddUserForm';

function AddUserPage() {
  const router = useRouter();
  const pathname = usePathname();
  var parts = pathname.split('/');
  return (
    <LayoutMain>
      <AddUserForm id={parts[parts.length - 2]} />
    </LayoutMain>
  );
}

export default AddUserPage;