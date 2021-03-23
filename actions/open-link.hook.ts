import { buttonsConfig, ShareButtonsType } from "../share-button.config";

export const useOpenLinkAction = () => {
  const goToLink = (buttonType: ShareButtonsType): void => {
    const currentUrl = window.location.href;
    const link: string = buttonsConfig[buttonType].url + currentUrl;
    window.open(link);
  };

  return { goToLink };
};
