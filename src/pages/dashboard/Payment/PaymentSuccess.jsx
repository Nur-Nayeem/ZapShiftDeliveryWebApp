import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hook/useAxiosSecure";
const PaymentSuccess = () => {
  const [searchParam] = useSearchParams();
  const sessionId = searchParam.get("session_id");
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [sessionId, axiosSecure]);
  return <div>Payment Successful</div>;
};

export default PaymentSuccess;
