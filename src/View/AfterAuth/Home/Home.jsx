import React, { useEffect } from "react";
import HomeLayout from "../../../Layout/HomeLayout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./homeSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <HomeLayout>
      <div className="p-4 overflow-x-scroll">
        <b>Course List</b>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="shadow-xl mt-8"
              onClick={() =>
                navigate("./usserid", { state: { userId: item.id } })
              }
            >
              <img src={item?.thumbnail} className="" alt="url" />
              <p>{item?.name}</p>
              <p>{item?.description}</p>
              <p>{item?.duration}</p>
            </div>
          ))
        ) : (
          <div className="error-message">
            No data available or an error occurred.
          </div>
        )}
        <section></section>
      </div>
    </HomeLayout>
  );
}
