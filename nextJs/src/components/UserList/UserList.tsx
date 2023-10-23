import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { Props } from 'next/script';
import { deleteUser, fetchUsers } from '../../services/UsersApi';
import { User } from '../../Models/User';
import { useRouter } from 'next/navigation'

const UserList: React.FC<Props> = () => {
    const router = useRouter();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserList();
      }, []);

    const fetchUserList = async() => {
        const users = await fetchUsers();
        setUsers(users);
    }

    // Edit a user
    const handleEdit = (userId) => {
       router.push(`/add-user/${userId}`);
    };

    // Delete a user
    const handleDelete = async (userId) => {
        await deleteUser(userId);
        fetchUserList();
    };

    return (
        <div className='p-10'>
            <h2 className='text-xl font-bold pb-10'>List of Users</h2>
            <table className="w-full border-collapse">
                <thead>
                <tr>
                    <th className='text-left font-bold'>ID</th>
                    <th className='text-left font-bold'>First Name</th>
                    <th className='text-left font-bold'>Last Name</th>
                    <th className='text-left font-bold'>Email</th>
                    <th className='text-left font-bold'>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map((user) => (
                    <tr key={user.id}>
                    <td className=''>{user.id}</td>
                    <td className=''>{user.firstName}</td>
                    <td className=''>{user.lastName}</td>
                    <td className=''>{user.email}</td>
                    <td className='flex'>
                        <div onClick={() => handleEdit(user.id)}>
                            <FontAwesomeIcon className='p-5 h-5 w-5 text-blue-400' icon={ faUserEdit} />
                        </div>
                        <div onClick={() => handleDelete(user.id)}>
                            <FontAwesomeIcon className='p-5 h-5 w-5 text-red-400' icon={faTrash} />
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;