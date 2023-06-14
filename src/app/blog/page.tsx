import { Articles } from "../interfaces/articles";
import CardArticle from "../components/cardArticle";
import BtnTheme from "../components/btnTheme";
import { useDarkTheme } from "../store/globals";
import { Link } from "next/link";

export default async function Page() {
  const theme = useDarkTheme.getState().theme;
  const data = await fetch("https://dev.to/api/articles?username=danielhe4rt");
  const articles: Articles[] = await data.json();
  // console.log(articles);

  return (
    <div className=" flex flex-col items-center p-10 gap-10">
      <BtnTheme />
      <h1 className=" text-5xl">Artigos do Blog</h1>
      <div>
        <h2 className=" text-3xl mb-4">Lista de artigos por título: </h2>
        <div className=" flex flex-col gap-7">
          {articles.map((article) => (
            <CardArticle
              imgSource={article.cover_image}
              imgAlt={"Blog post cover"}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
