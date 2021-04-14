import { RootType } from '../../store/type';

export type IconViewTypes = {
  name: string;
  onPress(): RootType['onPress'];
  size: number;
};

export type IconTypes = {
  name: IconViewTypes['name'];
  onPress(): RootType['onPress'];
  size: IconViewTypes['size'];
};
