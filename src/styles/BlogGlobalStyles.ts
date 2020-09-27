import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  figure.wp-block-image,
  div.optimized-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    div.gatsby-image-wrapper,
    img {
      border: 1px solid #444;
      border-radius: 5px;
      box-shadow: 1px 1px 10px 2px #555;
    }
    
  }
  
  div.optimized-image {
    margin-bottom: 50px;
    
    figcaption {
      margin-top: 15px;
    }
  }
`;