import { Articles } from '../interfaces/articles';

export default async function Page() {
  const data = await fetch('https://dev.to/api/articles?username=danielhe4rt')
  const articles: Articles[] = await data.json()

  console.log(articles);
  
  return (
    <div className=" flex flex-col items-center p-10">
      <h1 className=" text-5xl">Artigos do Blog</h1>
      <div>
        <h2 className=' text-3xl'>Lista de artigos por título: </h2>
        <div>
          {
            articles.map((article) => (
              <div>{article.title}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
