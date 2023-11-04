import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDatabyId } from "./homeSlice";
import { useLocation, useNavigate } from "react-router-dom";

export default function HomebyId() {
  const dispatch = useDispatch();
  const { data,loading } = useSelector((state) => state.home);
  const { state } = useLocation();
  const { userId } = state;

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUserDatabyId(userId));
  }, []);
  return (
    <div className="p-6">
      <b onClick={() => navigate("/")}>
        <span class="material-symbols-outlined">arrow_back_ios</span>
      </b>
      {loading ? (
        <p className="text-center">loading...</p>
      ) : (
        <div>
          <img src={data?.thumbnail} alt="" />
          <p>{data?.name}</p>
          <p>{data?.instructor}</p>
          <p>{data?.description}</p>
          <p>{data?.enrollmentStatus}</p>
          <p>{data?.duration}</p>
          <p>{data?.schedule}</p>
          <p>{data?.location}</p>
          <p>{data?.prerequisites}</p>
          <p>
            {data?.students?.map((item) => (
              <div>
                <p>{item?.name}</p>
                <p>{item?.age}</p>
              </div>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}
