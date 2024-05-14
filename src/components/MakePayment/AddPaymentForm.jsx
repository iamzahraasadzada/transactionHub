import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useAddPaymentMutation } from "../../services/apiPayments";
import { useEffect } from "react";
import toast from "react-hot-toast";

const FormContainer = styled.div`
  padding: 14rem 4rem 0;
`;

const StyledAddPaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
`;

const Label = styled.label`
  margin-bottom: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
`;

const SubmitButton = styled.input`
  padding: 1.2rem 2rem;
  border: none;
  border-radius: 4px;
  background-color: rgb(24, 18, 47);
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2f2943;
  }
`;

function AddPaymentForm() {
  const { register, handleSubmit, reset } = useForm();

  const [addPayment, result] = useAddPaymentMutation();

  async function onSubmit(d) {
    const updatedData = {
      from: d.from,
      to: d.to,
      amount: Number(d.amount),
    };
    await addPayment(updatedData);
    reset();
  }

  useEffect(() => {
    if (result.isSuccess) {
      toast.success("Payment added successfully");
    }
    if (result.isError) {
      toast.error("Failed to update payment");
    }
  }, [result.isSuccess, result.isError]);

  return (
    <FormContainer>
      <StyledAddPaymentForm onSubmit={handleSubmit(onSubmit)}>
        <Label>
          From
          <Input type="text" {...register("from")} />
        </Label>
        <Label>
          To
          <Input type="text" {...register("to")} />
        </Label>
        <Label>
          Amount
          <Input type="text" {...register("amount")} />
        </Label>
        <SubmitButton type="submit" value="Add" />
      </StyledAddPaymentForm>
    </FormContainer>
  );
}

export default AddPaymentForm;
