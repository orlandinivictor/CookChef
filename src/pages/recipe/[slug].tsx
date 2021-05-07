import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { SolarSystemLoading } from 'react-loadingg';

import { Footer } from '../../components/Footer';

import { api } from '../../services/api';

import { RecipesContainer } from './styles';
import { useRouter } from 'next/router';

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

type RecipeProps = {
  post: Post;
};

const Recipe = ({ post }: RecipeProps) => {
  const router = useRouter();

  if (router.isFallback) return <SolarSystemLoading />;
  return (
    <>
      <Head>
        <title>CookChef - {post.title}</title>
      </Head>
      <RecipesContainer>
        <img src={post.image} alt={post.title} />
        <div>
          <h1>{post.title}</h1>
          <hr />
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </RecipesContainer>
      <Footer post={post} />
    </>
  );
};

export default Recipe;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await api.get('posts/count');
  const posts = await api.get('posts', {
    params: {
      _limit: numberOfPosts.data,
    },
  });

  return {
    paths: posts.data.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await api.get('posts', {
    params: {
      _slug: ctx.params.slug,
    },
  });

  const finalPosts = posts.data ? posts.data : {};

  const post = finalPosts.map((post) => {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      author: post.author,
      image: post.cover.url,
      thumbnail: post.cover.formats.thumbnail.url,
      publishedAt: format(parseISO(post.published_at), 'd MMM yy', {
        locale: ptBR,
      }),
    };
  });

  return {
    props: { post: post[0] },
  };
};
