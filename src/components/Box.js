import styled from 'styled-components';
import { palette, spacing, color, flexbox } from '@material-ui/system';

export const Box = styled.div`
    ${flexbox}
    ${palette}
    ${spacing}
    ${color}

    display: ${props => props.display};
    background-color: ${props => props.bgColor};
`;
