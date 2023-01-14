import * as Styled from './styles';

// import Link from 'next/link';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  // const nextLink = link.match(/^\//) ? true : false;

  // if (nextLink) {
  //   return (
  //     <Link href={link} passHref target={target}>
  //       <Styled.Container>{children}</Styled.Container>
  //     </Link>
  //   );
  // }

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
