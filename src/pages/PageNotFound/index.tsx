import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

import Section from '@/ui/Section';
import Heading from '@/ui/Heading';
import Paragraph from '@/ui/Paragraph';
import Button from '@/ui/Button';

import * as Styles from './PageNotFound.style';

function PageNotFound() {
  const error: unknown = useRouteError();
  const navigate = useNavigate();

  const moveBack = () => navigate(-1);

  function errorMessage(error: unknown): string {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === 'string') {
      return error;
    } else {
      console.error(error);
      return 'Unknown error';
    }
  }

  return (
    <main>
      <Section paddingBlock={0} color="neutral-900" backgroundColor="neutral-100">
        <Section.Container>
          <Styles.ButtonWrapper>
            <Button direction="left" onClick={moveBack}>
              Back to Home
            </Button>
          </Styles.ButtonWrapper>
          <Styles.Wrapper>
            <Styles.Message>
              <Heading as="h1" size="xl" color="brand-400">
                Oops!
              </Heading>
              <Paragraph size="base" color="neutral-900">
                Sorry, an unexpected error has occurred.
              </Paragraph>
              <Heading as="h2" size="md" color="neutral-900">
                {errorMessage(error)}
              </Heading>
            </Styles.Message>
          </Styles.Wrapper>
        </Section.Container>
      </Section>
    </main>
  );
}

export default PageNotFound;
