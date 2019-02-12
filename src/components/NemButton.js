import React from 'react';
import styled from 'styled-components';
import { Fab, CircularProgress } from "@material-ui/core";

import { Box } from "./Box";

const ButtonContainer = styled(Box)`
    position: relative;
`;

const ButtonExtended = styled(Fab)`
    width: 100% !important;
    color: ${props => props.color === 'primary' && '#fff !important'};
`;

const ButtonProgress = styled(CircularProgress)`
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 16px;
`;

export const NemButton = (props) => (
    <ButtonContainer
        m={props.m}
        mt={props.mt}
        mb={props.mb}
        ml={props.ml}
        mr={props.mr}
        p={props.p}
        pt={props.pt}
        pb={props.pb}
        pl={props.pl}
        pr={props.pr}>
        <ButtonExtended
            variant="extended"
            disabled={props.disabled}
            color={props.color || 'primary'}
            type={props.type || 'button'}>
                {props.text}
        </ButtonExtended>
        { props.isLoading && <ButtonProgress size={24} />}
    </ButtonContainer>
);
