import styled from "styled-components";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setEditedData, toggleForm } from "../../slices/paymentSlice";

const StyledEditButton = styled(CiEdit)`
  cursor: pointer;
  &:hover {
    color: #161a20;
  }
`;

function EditButton({ data }) {
  const dispatch = useDispatch();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling behavior
    });
  }

  function handleClick() {
    dispatch(toggleForm(true));
    dispatch(setEditedData(data));
    scrollToTop();
  }

  return <StyledEditButton onClick={() => handleClick()} />;
}

export default EditButton;
