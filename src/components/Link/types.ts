import { List } from '../../store/type';

export type LinkTypes = {
  url: List['url'];
};

export type LinkViewTypes = {
  handlePress(): void;
  title: string;
};
