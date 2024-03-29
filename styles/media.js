// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

const sizes = {
  giant: 1100,
  desktop: 900,
  tablet: 700,
  phone: 400
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const remSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${remSize}rem) {
      ${css(...args)}
    }
  `;
  return accumulator
}, {})

export default media;
