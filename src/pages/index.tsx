import Head from 'next/head';
import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { api } from '../services/api';

import { Categories } from '../components/Categories';
import { Chefs } from '../components/Chefs';
import { IndexRecipes } from '../components/IndexRecipes';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

import { HomeContainer } from './styles';

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
  thumbnail: string;
  publishedAt: string;
  slug: string;
};

type Categorie = {
  id: number;
  name: string;
  thumbnail: string;
};

type HomeProps = {
  posts: Post[];
  lastPosts: Post[];
  categories: Categorie[];
  allPostsCount: number;
};

export default function Home({
  posts,
  categories,
  lastPosts,
  allPostsCount,
}: HomeProps) {
  return (
    <HomeContainer>
      <Head>
        <title>CookChef - Index</title>
      </Head>

      <Main count={allPostsCount} />

      <Categories categories={categories} />

      <IndexRecipes posts={posts} />

      <Chefs />

      <Footer posts={lastPosts} />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData = await api.get('posts', {
    params: {
      _limit: 9,
      _sort: 'id:DESC',
    },
  });

  const posts = postsData.data.map((post) => {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      author: post.author,
      category: post.category.name,
      image: post.cover.url,
      slug: post.slug,
      thumbnail: post.cover.formats.thumbnail.url,
      publishedAt: format(parseISO(post.published_at), 'd MMM yy', {
        locale: ptBR,
      }),
    };
  });

  const lastPosts = posts.slice(0, 2);

  const categoriesData = await api.get('categories');

  const categories = categoriesData.data.map((categorie) => {
    return {
      id: categorie.id,
      name: categorie.name,
      thumbnail: categorie.posts[0].cover.url,
    };
  });

  const allPostsCountData = await api.get('posts/count');
  const allPostsCount = allPostsCountData.data;

  return {
    props: { posts, lastPosts, categories, allPostsCount },
    revalidate: 60 * 60, // 1hour
  };
};
