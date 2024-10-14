import { useNavigate } from "react-router-dom";

export default function AccessDenied() {
  const navigate = useNavigate();

  return (
    <div className={"access-denied container-fluid small-offset-left"}>
      <div>
        <h1 className="boxed-regular__medium">
          4<span>0</span>3
        </h1>
        <h2 className="boxed-regular__semi-bold">Access Denied</h2>
        <p></p>
      </div>
      <button className="button-red" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}
