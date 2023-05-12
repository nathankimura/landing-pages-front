import P from 'prop-types'
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({ title, description, grid, background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading colorDark={!background} size='huge' uppercase as='h2'>
          {title}
        </Heading>
        <TextComponent>
          {description}
        </TextComponent>
        <Styled.Grid>
          {grid.map((element) => (
            <Styled.GridElement key={element.srcImg}>
              <Styled.Image src={element.srcImg} alt={element.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({
    altText: P.string.isRequired,
    srcImg: P.string.isRequired,
  })).isRequired,
  background: P.bool,
  sectionId: P.string,
}

