import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface cardProps {
    imgSource: string,
    imgAlt: string,
    title: string,
    description: string,
    key?: number,
    slug?: string,
}

export const CardArticle = ({ imgSource, imgAlt, title, description, key, slug } : cardProps) => {
  return (
    <div key={key} className="card lg:card-side bg-base-100 shadow-xl">
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
          <Link href={`/blog/${slug}`} className='btn btn-primary'>
            Leia Mais
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardArticle
