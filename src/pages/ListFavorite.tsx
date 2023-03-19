import { useSelector, useDispatch } from "react-redux";

import Layout from "../components/Layout";
import Card from "../components/Card";

import { setFavorites } from "../utils/redux/reducer/reducer";
import { dataType } from "../utils/types/person";
import { useTitle } from "../utils/hooks/hooks";
import { RootState } from "../utils/types/redux";
interface StateType {
  loading: boolean;
  datas: dataType[];
}

const ListFavorite = () => {
  const datas = useSelector((state: RootState) => state.data.favorites);
  const dispatch = useDispatch();
  useTitle("Favorite Page");

  function removeFavorite(data: dataType) {
    let dupeDatas: dataType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavUser", JSON.stringify(filterData));
    dispatch(setFavorites(filterData));
    alert(`Delete ${data.name} from favorite list`);
  }

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-3 mt-5 p-3">
        {datas.map((data) => (
          <Card
            key={data.id}
            name={data.name}
            username={data.username}
            email={data.email}
            id={data.id}
            labelButton="REMOVE FROM FAVORITE"
            onClickFav={() => removeFavorite(data)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default ListFavorite;
