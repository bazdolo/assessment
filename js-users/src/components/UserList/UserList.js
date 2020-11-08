import React, { Fragment, useEffect, useState } from 'react';
import ListItem from '../ListItem/ListItem';
import { NavLink } from 'react-router-dom';
import styles from './UserList.module.css';
import ReactPaginate from 'react-paginate';
import { getUsers } from '../../WebHelpers';
import { FaPlusCircle } from 'react-icons/fa';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const NUM_OF_USERS = 10;

export default function UserList() {
	const [ currentPage, setCurrentPage ] = useState(0);
	const [ users, setUsers ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const fetchUsers = async () => {
			const results = await getUsers();
			setUsers(results);
			setLoading(false);
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
			{loading ? (
				<Loader type="Watch" color="#816541" height={100} width={100} />
			) : (
				<Fragment>
					<div className={styles.add_new}>
						Add New User<NavLink to="/new">
							<FaPlusCircle />
						</NavLink>
					</div>
					<div className={styles.list_container}>
						{currentPageData.map((user) => <ListItem user={user} key={user.id} />)}
					</div>
					<div className="pagination" style={{ width: '100%' }}>
						<ReactPaginate
							previousLabel={'<'}
							nextLabel={'>'}
							breakLabel={'...'}
							pageCount={Math.ceil(users.length / 10)}
							pageRangeDisplayed={2}
							onPageChange={handlePageClick}
							activeClassName={'page-active'}
						/>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
}
