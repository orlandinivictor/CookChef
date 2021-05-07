import { CategoriesContainer, CategoriesContent } from './styles';

import { Categorie } from './Categorie';

type Category = {
  id: number;
  name: string;
  thumbnail: string;
};

type CategoriesProps = {
  categories: Category[];
  category?: Category;
};

export const Categories = ({ categories, category }: CategoriesProps) => {
  return (
    <CategoriesContainer>
      {category ? (
        <h2>Você está em: {category[0].name}</h2>
      ) : (
        <h2>Procurar por Categorias</h2>
      )}
      <CategoriesContent>
        {categories.map((categorie) => (
          <Categorie key={categorie.id} categorie={categorie} />
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};
