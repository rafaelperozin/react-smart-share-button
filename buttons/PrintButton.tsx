import React from 'react';

import {ShareButtonChildProps} from 'src/components/UIElements/ShareButtons/share-button.model';

export const PrintButton: React.FC<ShareButtonChildProps> = ({onClick, className}) => {
	return (
		<button onClick={onClick} className={className}>
			<i className="fas fa-print"></i>
		</button>
	);
};
