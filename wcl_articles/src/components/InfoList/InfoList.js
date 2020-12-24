import React, { useContext } from 'react';
import { InfoContainer } from './css';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { ThemeContext } from 'styled-components';
import { Typography } from '@material-ui/core';

// export interface InfoItem {
//   content: string | number;
//   prefix?: string;
//   suffix: string;
// }
export const InfoList = ({ list }) => {
  const activeTheme = useContext(ThemeContext);
  return (
    <InfoContainer color={activeTheme.colors.themeGray}>
      {list?.map((info, index) => {
        const prefix = info.prefix ? `${info.prefix} ` : '';
        const content = `${info.content}`;
        const suffix = info.suffix ? ` ${info.suffix}` : '';
        return (
          <li key={info.id}>
            <Typography>{prefix + content + suffix} </Typography>
            {index !== list.length - 1 ? (
              <Brightness1Icon className='info-separator' />
            ) : null}
          </li>
        );
      })}
    </InfoContainer>
  );
};
