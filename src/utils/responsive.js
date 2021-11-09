import { css } from 'styled-components'

export const responsive = (width, styles) => {
    return css`
        @media (max-width: ${width}px) {
            ${styles}
        }
    `
};