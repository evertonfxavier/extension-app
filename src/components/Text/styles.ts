import styled from 'styled-components';

export const Text1 = styled.span<{ align?: string; weight?: number }>`
  color: ${props => props.color};
  text-align: ${props => props.align};
  font-size: 1rem;
  font-weight: ${(props) => props.weight};
`;

export const Text2 = styled(Text1)`
  font-size: 0.85rem;
`;

export const Text3 = styled(Text1)`
  font-size: 0.75rem;
`;

export const Text4 = styled(Text1)`
  font-size: 0.5rem;
`;

