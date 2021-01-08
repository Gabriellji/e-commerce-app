import styled from "styled-components";

const SpinnerContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh
`;

const Loader = styled.div`
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  border: 3px solid #ddd;
  border-top: 3px solid #42a5f5;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  @-webkit-keyframes spin {
    to {
      border-top-color: #ec407a;
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    to {
      border-top-color: #ec407a;
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => (
  <SpinnerContainer>
    <Loader />
  </SpinnerContainer>
);

export default Spinner;
