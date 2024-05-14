import styled from "styled-components";
import Payment from "./Payment";
import { usePaymentsQuery } from "../../services/apiPayments";
import { FadeLoader } from "react-spinners";

const StyledPaymentsHistory = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15rem 3rem;
  gap: 2rem;
`;

const Loader = styled(FadeLoader)`
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  color: #2f2943;
  transform: translate(-50%, -50%);
`;

function PaymentsHistory() {
  const { data, isLoading } = usePaymentsQuery();

  return (
    <StyledPaymentsHistory>
      {isLoading ? <Loader /> : null}
      {data?.map((d) => (
        <Payment data={d} key={d.id} />
      ))}
    </StyledPaymentsHistory>
  );
}

export default PaymentsHistory;
