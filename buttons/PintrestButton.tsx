import React from 'react';

import {ShareButtonChildProps} from '../share-button.model';

export const PintrestButton: React.FC<ShareButtonChildProps> = ({onClick, className}) => {
	return (
		<button onClick={onClick} className={className}>
			<i className="fab fa-pinterest-p"></i>
		</button>
	);
};
