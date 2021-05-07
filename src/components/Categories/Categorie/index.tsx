import Link from 'next/link';
import React from 'react';

type Categorie = {
  id: number;
  name: string;
  thumbnail: string;
};

type CategorieProps = {
  categorie: Categorie;
};

export const Categorie = ({ categorie }: CategorieProps) => {
  return (
    <Link href={`/category/${categorie.name}`}>
      <a>
        <div
          style={{
            backgroundImage: `url(${categorie.thumbnail})`,
          }}
          className="categorie"
        >
          <span>{categorie.name.split(' ')[0]}</span>
        </div>
      </a>
    </Link>
  );
};
