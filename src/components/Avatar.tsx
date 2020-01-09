import * as React from 'react';
import MuiAvatar, { AvatarProps as MuiAvatarProps } from '@material-ui/core/Avatar';

export default function Avatar({ ...avatarProps }: MuiAvatarProps): JSX.Element {
  return (
      <MuiAvatar {...avatarProps} />
  );
};
