import { CategoriesContainer, CategoriesContent } from './styles';

import { Categorie } from './Categorie';

type Categorie = {
  id: number;
  name: string;
  thumbnail: string;
};

type CategoriesProps = {
  categories: Categorie[];
};

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <CategoriesContainer>
      <h2>Procurar por Categorias</h2>
      <CategoriesContent>
        {categories.map((categorie) => (
          <Categorie key={categorie.id} categorie={categorie} />
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};
