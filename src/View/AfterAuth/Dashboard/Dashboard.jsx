import React, { useEffect } from "react";
import UserDashboardLayout from "../../../Layout/UserDashboard/UserDashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminData } from "./dashboardSlice";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchAdminData());
  }, []);
  return (
    <UserDashboardLayout>
      {loading ? (
        <p className="text-center">loading...</p>
      ) : (
        <div>
          <div className="px-4 text-center my-8">
            <img
              className="w-[200px] h-[200px] m-[auto] rounded-full"
              src={data?.profileUrl}
              alt=""
            />
            <p>{data?.name}</p>
            <p>{data?.roll}</p>
            <p>{data?.mobile}</p>
            <p>{data?.code}</p>
            <br />
            <b onClick={() => navigate("/")}>back to home</b>
          </div>
        </div>
      )}
    </UserDashboardLayout>
  );
}
