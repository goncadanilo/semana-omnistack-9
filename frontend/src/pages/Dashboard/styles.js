import styled from "styled-components";

export const Container = styled.div`
  ul.spot-list {
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 30px;

    li {
      display: flex;
      flex-direction: column;

      header {
        width: 100%;
        height: 120px;
        background-size: cover;
        border-radius: 4px;
      }

      strong {
        margin-top: 10px;
        font-size: 24px;
        color: #444;
      }

      span {
        font-size: 15px;
        color: #999;
      }
    }
  }

  ul.notifications {
    list-style: none;
    margin-bottom: 15px;

    li {
      font-size: 18px;
      line-height: 24px;

      button {
        margin-right: 10px;
        margin-top: 10px;
        border: 0;
        font-weight: bold;
        background: transparent;
        cursor: pointer;
      }

      button.accept {
        color: #84c870;
      }

      button.reject {
        color: #e55e5e;
      }
    }
  }
`;
