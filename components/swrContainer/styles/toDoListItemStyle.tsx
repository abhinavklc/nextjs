import styled from 'styled-components';

const ToDoListItemStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  &.complete {
    cursor: pointer;
  }

  div {
    &.user_id {
      width: 20%;

      text-align: center;
    }

    &.title {
      width: 60%;
      text-align: left;
    }

    &.status {
      width: 20%;
      color: red;
      font-weight: bold;

      &.completed {
        color: green;
        font-weight: normal;
      }
    }
  }

  &:nth-child(odd) {
    background: #dddd;
  }
`;

export default ToDoListItemStyle;
