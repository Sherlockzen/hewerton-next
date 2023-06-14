import React from "react";

export const Page = ({ params } : { params: { slug: string }) => {
  return <div>My post: { params.slug }</div>;
}
