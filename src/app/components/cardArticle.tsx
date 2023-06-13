import React from 'react'
import Image from 'next/image';

interface cardProps {
    imgSource: string,
    imgAlt: string,
    title: string,
    description: string,

}

export const CardArticle = ({ imgSource, imgAlt, title, description } : cardProps) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        {
            imgSource && 
            <Image
              src={imgSource}
              alt={imgAlt}
              width={500}
              height={500}
            />
        }
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ler mais</button>
        </div>
      </div>
    </div>
  );
}

export default CardArticle