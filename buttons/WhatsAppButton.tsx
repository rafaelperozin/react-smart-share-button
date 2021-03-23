import React from 'react';

import {ShareButtonChildProps} from 'src/components/UIElements/ShareButtons/share-button.model';

export const WhatsAppButton: React.FC<ShareButtonChildProps> = ({onClick, className}) => {
	return (
		<button onClick={onClick} className={className}>
			<i className="fab fa-whatsapp"></i>
		</button>
	);
};
