import React from 'react';
import Icon from '../Icon';

import * as Styles from './Social.style';

function Social(): React.JSX.Element {
  return (
    <Styles.List>
      <li>
        <Styles.SocialLink
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to facebook"
        >
          <Icon name="facebook" width={20} height={20} />
        </Styles.SocialLink>
      </li>
      <li>
        <Styles.SocialLink
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to instagram"
        >
          <Icon name="instagram" width={20} height={20} />
        </Styles.SocialLink>
      </li>
      <li>
        <Styles.SocialLink
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to twitter"
        >
          <Icon name="twitter" width={20} height={20} />
        </Styles.SocialLink>
      </li>
    </Styles.List>
  );
}

export default Social;
