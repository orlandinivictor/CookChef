import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Container, NextLink, PrevLink } from './styles';

export type PaginationData = {
  nextPage: number;
  prevPage: number;
  numberOfPosts: number;
  postsPerPage: number;
  hasCategory: boolean;
};

type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage,
  numberOfPosts,
  postsPerPage,
  prevPage,
  hasCategory,
}: PaginationProps) => {
  const router = useRouter();

  const nextLink = hasCategory
    ? `/recipe/page/${nextPage}/${
        router.query.param.length > 1 ? router.query.param[1] : ''
      }`
    : `/recipe/page/${nextPage}`;
  const prevLink = hasCategory
    ? `/recipe/page/${prevPage}/${
        router.query.param.length > 1 ? router.query.param[1] : ''
      }`
    : `/recipe/page/${prevPage}`;

  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPrevPage = prevPage >= 1;

  return (
    <Container>
      {hasPrevPage && (
        <PrevLink>
          <Link as={prevLink} href="/recipe/page/[...param]">
            <a>Página anterior</a>
          </Link>
        </PrevLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/recipe/page/[...param]">
            <a>Próxima página</a>
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
