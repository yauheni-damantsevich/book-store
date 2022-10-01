import styled from "@emotion/styled";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListWrapper = styled.ul`
  display: flex;
  align-self: center;
`;

export const PreviousNext = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-self: center;
`;

export const Img = styled.img`
  padding: 8px;
`;

export const Title = styled.p`
  align-self: center;
  &.disabled {
    color: #a8a8a8;
  }
`;

export const List = styled.li`
  align-self: center;
`;

export const PageButton = styled.button`
  background-color: transparent;
  border: none;
  color: #a8a8a8;
  &.active {
    color: #313037;
  }
`;
