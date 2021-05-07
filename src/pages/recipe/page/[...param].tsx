import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { Footer } from '../../../components/Footer';
import { IndexRecipes } from '../../../components/IndexRecipes';
import { Pagination } from '../../../components/Pagination';
import { api } from '../../../services/api';
import { AllPostsLink, AllRecipes } from './styles';
import { SolarSystemLoading } from 'react-loadingg';

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

type PageProps = {
  posts: Post[];
  postsByCategory: Post[];
  lastPosts: Post[];
  pagination: PaginationData;
};

export default function Page({
  posts,
  postsByCategory,
  pagination,
  lastPosts,
}: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <SolarSystemLoading />;

  const hasCategory = postsByCategory ? true : false;

  return (
    <>
      <Head>
        <title>CookChef - Receitas</title>
      </Head>
      <AllRecipes>
        <IndexRecipes posts={posts} postsByCategory={postsByCategory} />
        <Pagination {...pagination} hasCategory={hasCategory} />
        {!pagination?.nextPage && (
          <Link href="/recipe/page/[...param]" as="/recipe/page/1" passHref>
            <AllPostsLink>Ver todos os posts.</AllPostsLink>
          </Link>
        )}
      </AllRecipes>
      <Footer posts={lastPosts} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export type PaginationData = {
  nextPage: number;
  prevPage: number;
  numberOfPosts: number;
  postsPerPage: number;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params.param[0]);
  const category = ctx.params.param[1] || '';

  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const prevPage = page - 1;

  const postsData = await api.get('posts', {
    params: {
      _start: startFrom,
      _limit: postsPerPage,
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

  let postsByCategory = {};

  if (category !== '') {
    const postsByCategoryData = await api.get('posts', {
      params: {
        _start: startFrom,
        _limit: postsPerPage,
        category: category,
      },
    });

    postsByCategory = postsByCategoryData.data.map((post) => {
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
  }

  const lastPosts = posts.slice(0, 2);

  const numberOfPostsData = await api.get('posts/count');
  const numberOfPostsCategory = await api.get('categories/count');

  let numberOfPosts = await numberOfPostsData.data;
  if (category !== '') {
    numberOfPosts = await numberOfPostsCategory.data;
  }

  const pagination: PaginationData = {
    nextPage,
    postsPerPage,
    numberOfPosts,
    prevPage,
  };

  return {
    props: { posts, postsByCategory, lastPosts, pagination },
    revalidate: 600, // 1hour
  };
};
