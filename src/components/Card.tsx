import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { Button } from "./Button";

interface CardProps {
  name: any;
  username: any;
  email: any;
  id: any;
  labelButton: string;
  onClickFav?: () => void;
}

const Card: FC<CardProps> = ({
  id,
  username,
  name,
  email,
  labelButton,
  onClickFav,
}) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/user/${id}`);
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          onClick={() => onClickDetail()}
          className="w-28 h-28 mb-3 rounded-full shadow-2xl"
          src={
            "https://www.bfi.co.id/Blog/Blog%20New/16%20Cara%20Menjadi%20Orang%20Sukses%20Dari%20Nol%2C%20Siapa%20Saja%20Bisa%20Mencobanya%21/cara-menjadi-orang-sukses.jpg"
          }
          alt="image"
        />
        <h5
          className="mb-1 text-xl font-medium text-gray-900 dark:text-white"
          onClick={() => onClickDetail()}
        >
          {name}
        </h5>
        <span
          className="text-sm text-gray-500 dark:text-gray-400"
          onClick={() => onClickDetail()}
        >
          {username}
        </span>
        <span
          className="text-sm text-gray-500 dark:text-gray-400"
          onClick={() => onClickDetail()}
        >
          {email}
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <Button label={labelButton} onClick={onClickFav} />
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
