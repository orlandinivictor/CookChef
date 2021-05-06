type Categorie = {
  name: string;
  thumbnail: string;
};

type CategorieProps = {
  categorie: Categorie;
};

export const Categorie = ({ categorie }: CategorieProps) => {
  return (
    <a href="">
      <div
        style={{
          backgroundImage: `url(${categorie.thumbnail})`,
        }}
        className="categorie"
      >
        <span>{categorie.name.split(' ')[0]}</span>
      </div>
    </a>
  );
};
