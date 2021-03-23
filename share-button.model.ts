import { ActionsType } from "./share-button.config";

export interface ShareButtonChildProps {
  onClick: () => void;
  className?: string;
}

export interface Actions {
  action: ActionsType;
  url: string | null;
  Component: React.FC<ShareButtonChildProps>;
}
export interface ButtonsConfig {
  [key: string]: Actions;
}
