import PaymentsHistory from "../components/Home/PaymentsHistory";
import EditForm from "../components/Home/EditForm";
import { useSelector } from "react-redux";

function Home() {
  const isOpened = useSelector((store) => store.payment.isOpenedEdit);

  return (
    <>
      {isOpened ? <EditForm /> : null}
      <PaymentsHistory />
    </>
  );
}

export default Home;
