import { Typography } from '@strapi/design-system/Typography';
import CaretIcon from '../CollapsePropertyMatrix/CaretIcon';

const activeStyle = (theme) => `
  ${Typography} {
    color: ${theme.colors.primary600};
    font-weight: ${theme.fontWeights.bold}
  }
  ${CaretIcon} {
    display: block;
    path {
      fill: ${theme.colors.primary600}
    };
  }
`;

export default activeStyle;
