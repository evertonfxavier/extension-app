import styled from 'styled-components';

export const Text1 = styled.span<{ align?: string }>`
  color: ${props => props.color};
  text-align: ${props => props.align};
  font-size: 1rem;
`;

export const Text2 = styled(Text1)`
  font-size: 0.75rem;
`;

export const Text3 = styled(Text1)`
  font-size: 0.5rem;
`;

