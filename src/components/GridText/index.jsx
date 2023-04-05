import P from 'prop-types'
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

import mock from './mock'

export const GridText = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading colorDark={!background} size='huge' uppercase as='h2'>
          {title}
        </Heading>
        <TextComponent>
          {description}
        </TextComponent>
        <Styled.Grid>
          {grid.map((element) => (
            <Styled.GridElement key={element.title}>
              <Heading colorDark={!background} size='medium' as='h3'>
                {element.title}
              </Heading>
              <TextComponent>
                {element.description}
              </TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({
    title: P.string.isRequired,
    description: P.string.isRequired,
  })).isRequired,
  background: P.bool,
}
