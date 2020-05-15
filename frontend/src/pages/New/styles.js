import styled from "styled-components";

export const Container = styled.div`
  label#thumbnail {
    margin-bottom: 20px;
    border: 1px dashed #ddd;
    background-size: cover;
    cursor: pointer;
    height: 170px;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }
  }

  label#thumbnail.has-thumbnail {
    border: 0;

    img {
      display: none;
    }
  }
`;
