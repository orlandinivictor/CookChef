import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

import { RecipesContainer, Header, Recipes, Card } from './styles';

type Post = {
  id: number;
  image: string;
  category: string;
  content: string;
  title: string;
  slug: string;
};

type RecipesProps = {
  posts: Post[];
  postsByCategory?: Post[];
};

export const IndexRecipes = ({ posts, postsByCategory }: RecipesProps) => {
  const router = useRouter();

  return (
    <RecipesContainer>
      <Header>
        {router.query.param ? (
          <h2>
            Página {router.query.param[0]}{' '}
            {router.query.param[1] && ' - ' + postsByCategory[0].category}
          </h2>
        ) : (
          <>
            <h2>Algumas de nossas receitas</h2>

            <Link
              href={
                router.query.slug !== undefined
                  ? `recipe/page/1/${posts[0].category}`
                  : 'recipe/page/1'
              }
            >
              <a>ver todos...</a>
            </Link>
          </>
        )}
      </Header>

      <Recipes>
        {router.query.param === undefined || router.query.param.length === 1
          ? posts.map((post) => (
              <Card key={post.id}>
                <Link href={`/recipe/${post.slug}`}>
                  <a>
                    <img src={`${post.image}`} alt="bolo de cenoura" />
                    <div>
                      <h3>{post.title}</h3>
                      <span>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                      </span>
                    </div>
                  </a>
                </Link>
              </Card>
            ))
          : postsByCategory.map((post) => (
              <Card key={post.id}>
                <Link href={`/recipe/${post.slug}`}>
                  <a>
                    <img src={`${post.image}`} alt="bolo de cenoura" />
                    <div>
                      <h3>{post.title}</h3>
                      <p>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                      </p>
                    </div>
                  </a>
                </Link>
              </Card>
            ))}
      </Recipes>
    </RecipesContainer>
  );
};
