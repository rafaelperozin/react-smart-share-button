import React from 'react';

import {ShareButtonChildProps} from '../share-button.model';

export const FacebookButton: React.FC<ShareButtonChildProps> = ({onClick, className}) => {
	return (
		<button onClick={onClick} className={className}>
			<i className="fab fa-facebook-f"></i>
		</button>
	);
};
