
import { Articles } from '../interfaces/articles';
import CardArticle from '../components/cardArticle';
import Image from 'next/image';
import BtnTheme from '../components/btnTheme';
import { useDarkTheme } from '../store/globals'
import { useStore } from 'zustand';

export default async function Page() {
  const theme = useDarkTheme.getState().theme;
  const data = await fetch('https://dev.to/api/articles?username=danielhe4rt')
  const articles: Articles[] = await data.json()
  // console.log(articles);
  
  return (
    <div className=" flex flex-col items-center p-10">
      <BtnTheme/>
      <div>{'Theme: '+ theme}</div>
      <h1 className=" text-5xl">Artigos do Blog</h1>
      <div>
        <h2 className=" text-3xl">Lista de artigos por título: </h2>
        <div>
          {
            articles.map((article) => (
              <CardArticle imgSource={article.cover_image} imgAlt={'Blog post cover'} title={article.title} description={article.description} />
            ))
          }
          <h1 className=' text-5xl'>O TESTE AQUI</h1>
          <CardArticle imgSource={articles[0].cover_image} imgAlt={'Blog post cover'} title={articles[0].title} description={articles[0].description} />
        </div>

      </div>
    </div>
  );
}
