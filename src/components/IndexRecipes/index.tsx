import ReactMarkdown from 'react-markdown';

import { RecipesContainer, Header, Recipes, Card } from './styles';

type Post = {
  id: number;
  image: string;
  content: string;
  title: string;
};

type RecipesProps = {
  posts: Post[];
};

export const IndexRecipes = ({ posts }: RecipesProps) => {
  return (
    <RecipesContainer>
      <Header>
        <h2>Algumas de nossas receitas</h2>

        <a href="">ver todos...</a>
      </Header>

      <Recipes>
        {posts.map((post) => (
          <Card key={post.id}>
            <a href="">
              <img src={`${post.image}`} alt="bolo de cenoura" />
              <div>
                <h3>{post.title}</h3>
                <p>
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </p>
              </div>
            </a>
          </Card>
        ))}
      </Recipes>
    </RecipesContainer>
  );
};
