import React from 'react';
import Header from '../components/header';

const BaseLayout = (props) => {
		return (
				<div>
					<Header />
					<main className="main-content">
						<div className="container-fluid">
							{props.children}
						</div>
					</main>
					<footer className="footer">
						{/*<Footer />*/}
					</footer>
				</div>
			)
}

export default BaseLayout;