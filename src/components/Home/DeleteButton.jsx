import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { useDeletePaymentMutation } from "../../services/apiPayments";

const StyledDeleteButton = styled(AiOutlineDelete)`
  cursor: pointer;
  &:hover {
    color: #161a20;
  }
`;

function DeleteButton({ id }) {
  const [deletePayment] = useDeletePaymentMutation();

  async function handleClick(id) {
    await deletePayment(id);
  }

  return <StyledDeleteButton onClick={() => handleClick(id)} />;
}

export default DeleteButton;
