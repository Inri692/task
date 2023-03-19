import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import Loading from "components/Loading";
import Layout from "components/Layout";
import Card from "components/Card";

import { setFavorites } from "utils/redux/reducer/reducer";
import { dataType } from "utils/types/person";
import { useTitle } from "utils/hooks/hooks";

interface StateType {
  loading: boolean;
  datas: dataType[];
}

const Home = () => {
  const dispatch = useDispatch();
  useTitle("User List Page");
  const [datas, setDatas] = useState<dataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)

      .then((result) => {
        const { data } = result;
        console.log(data);
        setDatas(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  function handleFavorite(data: dataType) {
    const checkExist = localStorage.getItem("FavUser");
    if (checkExist) {
      let parseFav: dataType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("FavUser", JSON.stringify(parseFav));
      dispatch(setFavorites(parseFav));
      alert("User added to favorite");
    } else {
      localStorage.setItem("FavUser", JSON.stringify([data]));
    }
  }

  return (
    <>
      <Layout>
        {loading ? (
          <div className="w-full flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          <>
            <h1 className="text-white mb-2 mt-3 p-2 text-3xl font-bold ">
              List User
            </h1>
            <div className="grid grid-cols-4 gap-3 p-3 bg-opa stic lg:grid-cols-4 gap-5 p-5 md:grid-cols-3 sm:grid-cols-2 z-0 backdrop-blur-2xl ">
              {datas.map((data) => (
                <Card
                  key={data.id}
                  name={data.name}
                  email={data.email}
                  username={data.username}
                  id={data.id}
                  labelButton="ADD TO FAVORITE"
                  onClickFav={() => handleFavorite(data)}
                />
              ))}
            </div>
          </>
        )}
      </Layout>
    </>
  );
};
export default Home;
