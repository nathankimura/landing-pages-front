import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles'
import { Container as SectionContainer } from '../SectionContainer/styles'


export const Container = styled.footer`
  ${({ theme }) => css`
  text-align: center;
  border-top: 0.1rem solid ${theme.colors.mediumGray};
  a {
    color: ${theme.colors.secondaryColor};
    text-decoration: none;
  };
  & ${TextComponent} {
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small} 0;
  };
  & ${SectionContainer} {
    padding-top: 0;
    padding-bottom: 0;
  };
  `}
`;
