import React from 'react';

import {
	buttonsConfig,
	ShareButtonsType,
	shareLabel,
} from './share-button.config';

import {useShareButtonActions} from './share-button-actions.hook';

export interface ShareButtonProps {
	allow: ShareButtonsType[];
	className?: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({allow, className}) => {
	const {handleShareButtonClick} = useShareButtonActions();
	console.log(className);

	return (
		<div>
			<span>{shareLabel}</span>
			{allow.map((currentButton: ShareButtonsType, index: number) => {
				const ShareButtonComponent = buttonsConfig[currentButton].Component;
				return (
					<ShareButtonComponent
						onClick={() =>
							handleShareButtonClick(currentButton, buttonsConfig[currentButton].action)
						}
						className={className}
						key={index}
					/>
				);
			})}
		</div>
	);
};
