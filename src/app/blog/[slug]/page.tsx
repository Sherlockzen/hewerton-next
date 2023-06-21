import React from "react";

const Page = async ({ params } : { params: { slug: string }}) => {
  const resp = await fetch(`https://dev.to/api/articles/danielhe4rt/${params.slug}`)
  const article = await resp.json()
  // console.log(article.description);
  
  return article.body_html
}
export default Page