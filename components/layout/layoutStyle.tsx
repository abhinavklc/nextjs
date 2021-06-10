import styled from 'styled-components';

const LayoutStyle = styled.div`
  header {
    position: sticky;
    top: 0;
  }

  nav {
    background: blue;
    color: #fff;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    a {
      text-decoration: none;
      margin-right: 1rem;
      font-weight: bold;
      padding: 0.9rem;
      color: #fff;

      &.active {
        background: #0000d4;
      }

      &:visited {
        color: #fff;
      }

      &:hover {
        background: #0000d4;
      }
    }
  }
`;

export default LayoutStyle;
