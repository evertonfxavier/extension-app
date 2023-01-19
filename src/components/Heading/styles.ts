import styled from 'styled-components';

export const Heading1 = styled.h1<{ align?: string }>`
  color: ${props => props.color};
  text-align: ${props => props.align};
  font-size: 1.5rem;
  line-height: 40px;
  font-weight: 400;
`;

export const Heading2 = styled(Heading1)`
  font-size: 1.25rem;
  line-height: 30px;
`;

export const Heading3 = styled(Heading1)`
  font-size: 1rem;
  line-height: 26px;
`;

export const Heading4 = styled(Heading1)`
  font-size: 0.75rem;
  line-height: 20px;
`;

export const Heading5 = styled(Heading1)`
  font-size: 0.50rem;
  line-height: 16px;
`;

