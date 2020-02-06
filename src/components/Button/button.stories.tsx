import React from 'react';

import ButtonComponent from './Button';

export default {
  title: 'Button Component',
};

export const SimpleButton = () => <ButtonComponent>Hello</ButtonComponent>;

export const LinkButton = () => (
  <ButtonComponent link="/">Link</ButtonComponent>
);
