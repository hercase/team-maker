import styled from "styled-components";
import Logo from "components/atoms/Logo";
import Link from "next/link";
import Button from "components/atoms/Button";

const Styled404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-direction: column;
  height: 100vh;

  span {
    font-size: 1rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.paragraph};
  }
`;

const Custom404 = () => {
  return (
    <Styled404>
      <Logo width="20rem" dark />
      <span>Parece que esta página no existe...</span>
      <Button>
        <Link href="/create">Volver al inicio</Link>
      </Button>
    </Styled404>
  );
};

export default Custom404;
