import styled from "styled-components";

export const DocsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  line-height: 24px;
  font-size: 14px;
  overflow: auto;
  flex-shirnk: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  & > p {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  h1 {
    font-size: 28px;
    line-height: 32px;
  }
  h2 {
    font-size: 26px;
    line-height: 32px;
  }
  h3 {
    font-size: 24px;
    line-height: 32px;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
  h5 {
    font-size: 14px;
    font-weight: bold;
  }
  h6 {
    font-size: 12px;
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }

  ul > li:before {
    content: "·";
    width: 18px;
    height: 24px;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    float: left;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }

  hr {
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 16px;
    border: none;
    width: 25%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  code {
    font-family: monospace;
    font-size: 12px;
    padding: 3px;
    position: relative;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  blockquote {
    padding: 8px;
    margin: 8px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  & > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
