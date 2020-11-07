import React, { Fragment, useEffect, useState } from 'react';
import ListItem from '../ListItem/ListItem';
import styles from './UserList.module.css';
import ReactPaginate from 'react-paginate';
import { getUsers } from '../../WebHelpers';

const NUM_OF_USERS = 10;

export default function UserList() {
	const [ currentPage, setCurrentPage ] = useState(0);
	const [ users, setUsers ] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const results = await getUsers();
			console.log(results.slice(0, 10));

			setUsers(results);
		};
		fetchUsers();
	}, []);

	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected);
	};

	const offset = currentPage * NUM_OF_USERS;

	const currentPageData = users.slice(offset, offset + NUM_OF_USERS);

	return (
		<Fragment>
			<div className={styles.list_container}>
				{currentPageData.map((user) => <ListItem user={user} key={user.id} />)}
			</div>
			<div className="pagination" style={{ width: '100%' }}>
				<ReactPaginate
					previousLabel={'<'}
					nextLabel={'>'}
					breakLabel={'...'}
					// breakClassName={'break-me'}
					pageCount={Math.ceil(users.length / 10)}
					// marginPagesDisplayed={2}
					pageRangeDisplayed={2}
					onPageChange={handlePageClick}
					// containerClassName={'pagination'}
					// subContainerClassName={'pages pagination'}
					activeClassName={'page-active'}
				/>
			</div>
		</Fragment>
	);
}
