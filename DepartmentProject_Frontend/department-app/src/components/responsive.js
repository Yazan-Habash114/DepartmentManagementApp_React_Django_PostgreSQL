import { css } from "styled-components";

export const Mobile = (props) => {
    return (
        css`
            @media only screen and (max-width: 480px) {
                ${props}
            }
        `
    );
};

export const Tablet = (props) => {
    return (
        css`
            @media only screen and (max-width: 740px) {
                ${props}
            }
        `
    );
};

export const MediumScreen = (props) => {
    return (
        css`
            @media only screen and (max-width: 1024px) {
                ${props}
            }
        `
    );
};