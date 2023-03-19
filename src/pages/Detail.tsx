import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../components/Layout";
import Loading from "../components/Loading";

import { dataType } from "../utils/types/person";

const Detail = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<dataType[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  console.log(id);
  function fetchData() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)

      .then((result) => {
        const { data } = result;
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <>
          <a
            href="#"
            className="relative block overflow-hidden bg-white m-40 rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  Leanne Graham
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">@Bret</p>
              </div>

              <div className="hidden sm:block sm:shrink-0">
                <img
                  alt="Paul Clapton"
                  src="https://www.bfi.co.id/Blog/Blog%20New/16%20Cara%20Menjadi%20Orang%20Sukses%20Dari%20Nol%2C%20Siapa%20Saja%20Bisa%20Mencobanya%21/cara-menjadi-orang-sukses.jpg"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="max-w-[40ch] text-sm text-gray-500">
                Lorem ipsum dolor sit
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  Kulas Light
                </dt>
                <dd className="text-xs text-gray-500">Address</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  083748799829
                </dt>
                <dd className="text-xs text-gray-500">Phone Number</dd>
              </div>
            </dl>
          </a>
        </>
      )}
    </Layout>
  );
};

export default Detail;
