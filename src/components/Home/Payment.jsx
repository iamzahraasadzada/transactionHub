import styled from "styled-components";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const StyledPayment = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  padding: 1.2rem 2.5rem;
  border-radius: 0.6rem;
  font-size: 2.2rem;
  font-weight: 500;
`;

const P = styled.p`
  color: rgb(24, 18, 47);
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;
`;

function Payment({ data }) {
  return (
    <StyledPayment>
      <P>
        {data?.from} to {data?.to} {Number(data?.amount).toFixed(2)}$
      </P>
      <Buttons>
        <EditButton data={data} />
        <DeleteButton id={data.id} />
      </Buttons>
    </StyledPayment>
  );
}

export default Payment;
