import { screen } from '@testing-library/react';
import React from 'react';
import { Heading } from '.';
import { customRender } from '../../utils/customRender';

describe('<Heading />', () => {
  it('should render a heading', () => {
    customRender(<Heading title="Hello world!" />);
    const element = screen.getByRole('heading', { name: 'Hello world!' });
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyleRule('font-size', '5rem');
  });
});
