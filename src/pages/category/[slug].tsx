import React from 'react';
import { SolarSystemLoading } from 'react-loadingg';

import { GetStaticPaths, GetStaticProps } from 'next';

import { Footer } from '../../components/Footer';

import { api } from '../../services/api';

import { CategoryContainer } from './styles';
import { Categories } from '../../components/Categories';
import { useRouter } from 'next/router';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { IndexRecipes } from '../../components/IndexRecipes';
import Head from 'next/head';

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

type Category = {
  id: number;
  name: string;
  posts: Post[];
  thumbnail: string;
};

type CategoryProps = {
  allCategories: Category[];
  categories: Category;
  posts: Post[];
  lastPosts: Post[];
};

const Category = ({
  allCategories,
  categories,
  posts,
  lastPosts,
}: CategoryProps) => {
  const router = useRouter();

  if (router.isFallback) return <SolarSystemLoading />;

  return (
    <>
      <Head>
        <title>CookChef - {categories[0].name}</title>
      </Head>
      <CategoryContainer>
        <Categories categories={allCategories} category={categories} />
        <IndexRecipes posts={posts} />
      </CategoryContainer>
      <Footer posts={lastPosts} />
    </>
  );
};

export default Category;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfCategories = await api.get('categories/count');
  const categories = await api.get('categories', {
    params: {
      _limit: numberOfCategories.data,
    },
  });

  return {
    paths: categories.data.map((category) => {
      return {
        params: {
          slug: category.name,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const categoriesData = await api.get('categories', {
    params: {
      name_contains: ctx.params.slug,
    },
  });

  const categories = categoriesData.data.map((category) => {
    return {
      id: category.id,
      name: category.name,
      posts: category.posts,
      thumbnail: category.posts[0].cover.formats.thumbnail.url,
    };
  });

  const allCategoriesData = await api.get('categories');

  const allCategories = allCategoriesData.data.map((category) => {
    return {
      id: category.id,
      name: category.name,
      posts: category.posts,
      thumbnail: category.posts[0].cover.formats.thumbnail.url,
    };
  });

  const postsData = await api.get('categories', {
    params: {
      _limit: 6,
      name_contains: ctx.params.slug,
    },
  });

  const posts = postsData.data[0].posts.map((post) => {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      category: post.category,
      slug: post.slug,
      author: post.author,
      image: post.cover.url,
      thumbnail: post.cover.formats.thumbnail.url,
      publishedAt: format(parseISO(post.published_at), 'd MMM yy', {
        locale: ptBR,
      }),
    };
  });

  const lastPosts = posts.slice(0, 2);

  return {
    props: { allCategories, categories, posts, lastPosts },
  };
};
