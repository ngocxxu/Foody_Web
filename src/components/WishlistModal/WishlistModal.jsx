import { Button, Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_WHISHLIST_MODAL } from "../../redux/consts/const";
import "./WishlistModal.scss";
import heartIcon from "../../assets/svg/heart-2.svg";
import xIcon from "../../assets/svg/x-symbol.svg";
import product2 from "../../assets/images/product/Products-10-600x600.jpg";

export const WishlistModal = () => {
  const { modalWishlist } = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch({
      type: SET_WHISHLIST_MODAL,
      modalWishlist: false,
    });
  };

  return (
    <>
      <Modal title="" visible={modalWishlist} onCancel={handleCancel}>
        <div className="flex items-center mb-4 border-b pb-5">
          <img src={heartIcon} alt="heartIcon" className="fill-red-800 mr-2" />
          <p className="text-xl font-semibold my-auto ">Wishlist (5)</p>
        </div>
        <div className="border-b">
          <div className="flex my-3 justify-between items-center">
            <div className="flex">
              <img className="cursor-pointer" src={xIcon} alt="xIcon" />
              <div
                style={{ width: "80px", height: "80px" }}
                className="my-auto mx-4"
              >
                <img
                  width="100%"
                  className="img_wishlist"
                  src={product2}
                  alt="product2"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-bold mb-0 cursor-pointer">Cheesecake</h4>
                <h2 className="text-lg text-red-500 font-semibold mb-0">
                  $99.00
                </h2>
                <div className='text-gray-400 text-xs'>April 24, 2022</div>
              </div>
            </div>
            <div>
              <p className="text-right text-gray-400 text-xs">In stock</p>
              <Button type="dashed" shape="round" size="small">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <button className="text-white font-semibold bg-black  py-2 px-4 rounded-full hover:bg-red-600 ease-out duration-300">
            OPEN WISHLIST PAGE
          </button>
          <button className="border-black border-2 font-semibold py-2 px-4 rounded-full hover:bg-red-600 hover:text-white hover:border-red-600 ease-out duration-300">
            CONTINUE SHOPPING &rarr;
          </button>
        </div>
      </Modal>
    </>
  );
};
