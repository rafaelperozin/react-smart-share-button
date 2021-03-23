import React from 'react';

import {ShareButtonChildProps} from 'src/components/UIElements/ShareButtons/share-button.model';

export const TwitterButton: React.FC<ShareButtonChildProps> = ({onClick, className}) => {
	return (
		<button onClick={onClick} className={className}>
			<i className="fab fa-twitter"></i>
		</button>
	);
};
