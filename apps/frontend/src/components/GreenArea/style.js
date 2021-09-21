import styled from 'styled-components';

export const DataCell = styled.td`
    background-color: ${props => props.status};
    padding: auto;
    font-size: 30px;
    cursor: pointer
`;