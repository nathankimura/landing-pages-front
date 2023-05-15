import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { mapData } from '../../api/map-data';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { Base } from '../Base';
import { PageNotFound } from '../../templates/PageNotFound';
import { Loading } from '../../templates/Loading';

import config from '../../config';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const isMounted = useRef(true);

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : 'my-landing-page';
    console.log(slug);

    const load = async () => {
      try {
        const data = await fetch(
          `https://strapi-landing-pages-kaz6.onrender.com/api/pages/?filters[slug]=${slug}&populate=deep`
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        console.log(pageData[0]);
        setData(() => pageData[0]);
      } catch (error) {
        console.log(error)
        setData(undefined);
      };
    };

    if (isMounted.current === true) {
      load();
    };

    return () => {
      isMounted.current = false;
    };
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return <Base
    links={links}
    footerHtml={footerHtml}
    logoData={{ text, link, srcImg }}
  >
    {sections.map((section, index) => {
      console.log(section);
      const { component } = section;
      const key = `${slug}-${index}`;

      if (component === 'section.section-two-columns') {
        return <GridTwoColumns key={key} {...section} />;
      }

      if (component === 'section.section-content') {
        return <GridContent key={key} {...section} />;
      }

      if (component === 'section.section-grid-text') {
        return <GridText key={key} {...section} />;
      }

      if (component === 'section.section-grid-image') {
        return <GridImage key={key} {...section} />;
      }
    })}
  </Base>
}

export default Home;
