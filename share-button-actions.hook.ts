import { useOpenLinkAction } from "./actions/open-link.hook";
import { usePrintAction } from "./actions/print.hook";
import {
  ActionsType,
  ShareButtonsType,
} from "./share-button.config";

export const useShareButtonActions = () => {
  const { goToLink } = useOpenLinkAction();
  const { printIt } = usePrintAction();

  const handleShareButtonClick = (
    shareType: ShareButtonsType,
    actionType: ActionsType
  ): void => {
    const Handler = {
      link: goToLink,
      print: printIt,
    };

    Handler[actionType](shareType);
  };

  return { handleShareButtonClick };
};
