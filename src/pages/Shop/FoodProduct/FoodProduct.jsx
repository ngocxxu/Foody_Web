/* eslint-disable jsx-a11y/anchor-is-valid */
import { EditOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, InputNumber, Rate, Tabs } from 'antd';
import * as dayjs from 'dayjs';
import {
  createRef,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { ReactComponent as HeartSVG } from '../../../assets/svg/heart-2.svg';
import { BreadcrumbURL } from '../../../components/Breadcrumb/BreadcrumbURL';
import { LazyButtonLoading } from '../../../components/LazyLoading/LazyLoading';
import { useAuth } from '../../../firebase';
import { addProductToCart } from '../../../services/CartService';
import {
  handleAddReviewFS,
  handleGetReviewFS,
} from '../../../services/ReviewService';
import { handleAddWishList } from '../../../services/WishListService';
import { SaleProduct } from '../../../template/HomeTemplate/SaleProduct/SaleProduct';
import './FoodProduct.scss';

const settings = {
  // customPaging: function (i) {
  //   console.log(i);
  //   return (
  //     <a>
  //       <img
  //         alt="product"
  //         src={require(`../../../assets/images/product/Products-${
  //           i + 14
  //         }-600x600.jpg`)}
  //       />
  //     </a>
  //   );
  // },
  autoplay: true,
  swipeToSlide: true,
  // dots: true,
  fade: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CarouselFood = memo(({ assets }) => {
  return (
    <div>
      <Slider {...settings}>
        {assets?.map((img) => (
          <div key={img.id}>
            <img alt={img.filename} src={img.url} />
          </div>
        ))}
        {/* <div>
          <img
            alt="product"
            src={require('../../../assets/images/product/Products-14-600x600.jpg')}
          />
        </div> */}
        {/* <div>
          <img
            alt="product"
            src={require('../../../assets/images/product/Products-15-600x600.jpg')}
          />
        </div>
        <div>
          <img
            alt="product"
            src={require('../../../assets/images/product/Products-16-600x600.jpg')}
          />
        </div>
        <div>
          <img
            alt="product"
            src={require('../../../assets/images/product/Products-17-600x600.jpg')}
          />
        </div> */}
      </Slider>
    </div>
  );
});

const { TabPane } = Tabs;

const onChangeTab = (key) => {
  // console.log(key);
};

const FoodReview = memo(
  ({ productId, productName, reviewList, countReview, dimensions }) => {
    return (
      <div className='mt-6 lg:mb-12 text-base'>
        {countReview > 0 ? (
          <div>
            <h1 className='text-2xl mb-4'>
              {countReview > 0 && `${countReview} `}
              review for <span className='text-[#f1252b]'>{productName}</span>
            </h1>
            {reviewList.length > 0 &&
              reviewList
                .filter((review1) => {
                  return review1?.review.product_id === productId;
                })
                .map((review2) => (
                  <div key={review2.id} className='border p-5 rounded-xl mb-4'>
                    <div className='md:flex justify-between items-center'>
                      <div className='md:flex justify-center items-center'>
                        <Avatar
                          size={dimensions.width < 650 ? 30 : 50}
                          className='mr-2'
                          src={review2?.review.image}
                        />
                        <div className='md:ml-4 ml-0 my-auto'>
                          <div className='text-black font-semibold'>
                            {review2?.review.name}
                          </div>
                          <div>
                            {dayjs(`${review2?.review.review_time}`).format(
                              'MMMM D, YYYY h:mm A'
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='mb-auto'>
                        <Rate defaultValue={review2?.review.rate} />
                      </div>
                    </div>
                    <div className='mt-4'>{review2?.review.content_review}</div>
                  </div>
                ))}
            <div className='lg:mt-12 mt-4 border-2 border-gray-500 rounded-full w-fit p-4'>
              <EditOutlined style={{ fontSize: '25px' }} />
              <span className='pl-4'>ADD A REVIEW</span>
            </div>
          </div>
        ) : (
          <div>
            <h1 className='text-2xl'>Reviews</h1>
            <p className='lg:mb-12 mb-6'>There are no reviews yet.</p>
            <div className='border-2 border-gray-500 rounded-full w-fit p-4'>
              <EditOutlined style={{ fontSize: '30px' }} />
              <span className='pl-4 uppercase'>
                BE THE FIRST TO REVIEW {`“${productName}”`}
              </span>
            </div>
          </div>
        )}
        <p className='lg:mt-12 mt-6'>
          Your email address will not be published. Required fields are marked
          <span className='text-[#f1252b]'>*</span>
        </p>
        <div>
          <Form.Item className='mt-4 font-bold' name='rate' label='Your Rating'>
            <Rate
              rules={[{ required: true, message: 'Please vote your stars' }]}
            />
          </Form.Item>
          <div className='lg:grid grid-cols-2 gap-5'>
            <div>
              <Form.Item
                name='content_review'
                rules={[
                  { required: true, message: 'Please input your reviews' },
                ]}
              >
                <Input.TextArea
                  size='large'
                  placeholder='Your Reviews*'
                  showCount
                  maxLength={100}
                  rows={3}
                />
              </Form.Item>
            </div>
            <div>
              {/* <Form.Item
              name='username'
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input size='large' placeholder='Name*' />
            </Form.Item>
            <Form.Item
              name='email'
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input size='large' placeholder='Email*' />
            </Form.Item> */}
              <Form.Item>
                <Button
                  className='text-black'
                  size='large'
                  block
                  htmlType='submit'
                  type='primary'
                >
                  SUBMIT
                </Button>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const RelatedProducts = memo(({ relatedProducts }) => {
  return (
    <>
      <h1
        className="relative text-center text-3xl mt-8 after:content-[''] 
      after:w-20 after:h-0.5 after:bg-red-500 after:absolute 
      after:top-12 after:left-1/2 after:-translate-x-1/2"
      >
        Related Products
      </h1>
      <div className='flex items-center justify-center'>
        <SaleProduct relatedProducts={relatedProducts} />
      </div>
    </>
  );
});

export const FoodProduct = () => {
  const [form] = Form.useForm();
  const formRef = createRef();
  const currentUser = useAuth();
  const flagRef = useRef(false);
  const flagRefBuyNow = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quatityFood, setQuantityFood] = useState(1);
  const [countReview, setCountReview] = useState(0);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const { isButtonLazyLoading } = useSelector((state) => state.othersReducer);
  const { wishListCart } = useSelector((state) => state.wishListReducer) || [];
  const { reviewList } = useSelector((state) => state.reviewReducer) || [];
  const { productURL } = location.state ?? {};
  const {
    id,
    name,
    price,
    assets,
    categories,
    description,
    sku,
    related_products,
  } = productURL ?? {};

  const onFinish = useCallback(
    (values) => {
      formRef.current.resetFields();
      dispatch(
        handleAddReviewFS({
          ...values,
          // user_id: currentUser?.uuid,
          product_id: id,
          review_time: new Date().toJSON(),
          image: currentUser?.photoURL
            ? currentUser?.photoURL
            : `https://i.pravatar.cc/50/${currentUser?.uid}`,
          name: currentUser?.reloadUserInfo?.displayName
            ? currentUser.reloadUserInfo.displayName
            : currentUser?.email.split('@')[0],
        })
      );
    },
    [dispatch, currentUser, id, formRef]
  );

  const averageStarReview = useCallback(() => {
    if (reviewList.length > 0) {
      return (
        reviewList
          .filter((review1) => review1?.review.product_id === id)
          .map((num) => num?.review.rate)
          .reduce((prevVal, curVal) => prevVal + curVal, 0) / countReview
      );
    }
  }, [reviewList, countReview, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Handle button appear only one LazyLoading
  useEffect(() => {
    flagRef.current = false;
    flagRefBuyNow.current = false;
  }, [isButtonLazyLoading]);

  useEffect(() => {
    dispatch(handleGetReviewFS());
  }, [dispatch]);

  useEffect(() => {
    setCountReview(
      reviewList.filter((review1) => {
        return review1?.review.product_id === id;
      }).length
    );
  }, [id, reviewList]);

  useEffect(() => {
    form.setFieldsValue({ 'average-rate': averageStarReview() ?? 5 });
  }, [form, averageStarReview]);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Form
      ref={formRef}
      form={form}
      onFinish={onFinish}
      initialValues={{
        rate: 5,
      }}
      className='container-food w-3/4 lg:pt-28 mx-auto'
    >
      <div className='border-t py-4'>
        <BreadcrumbURL />
      </div>
      <div className='lg:grid grid-cols-2 gap-14'>
        <div>
          <CarouselFood assets={assets} />
        </div>
        <div className='mt-16 lg:mt-0'>
          <h1 className='text-3xl font-medium'>{name}</h1>
          <h2 className='text-2xl text-[#f1252b] font-medium'>
            {price?.formatted_with_symbol}
          </h2>
          <Form.Item className='mt-4 font-bold' name='average-rate'>
            <Rate disabled allowHalf />
          </Form.Item>
          <hr />
          <div
            className='py-7 text-[#8d8d8d] text-base'
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div className='grid grid-cols-2 gap-2 my-2'>
            <div className='my-auto'>
              <InputNumber
                size='large'
                min={1}
                max={50}
                defaultValue={quatityFood}
                onChange={(value) => setQuantityFood(value)}
                style={{ width: 65 }}
                title='Quantity'
              />
            </div>
            <button
              onClick={() => {
                if (currentUser) {
                  flagRefBuyNow.current = true;
                  dispatch(
                    addProductToCart({
                      id: id,
                      quantity: quatityFood,
                    })
                  );
                } else {
                  navigate('/login');
                }
              }}
              className={`bg-[#a0a0a0] border-[#a0a0a0] border text-white text-xs font-bold rounded-full px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300 lg:py-4 lg:text-base`}
            >
              {isButtonLazyLoading & (flagRefBuyNow.current === true) ? (
                <LazyButtonLoading />
              ) : (
                'ADD TO CART'
              )}
            </button>
          </div>
          <button
            onClick={() => {
              if (currentUser) {
                flagRef.current = true;
                dispatch(
                  addProductToCart(
                    {
                      id: id,
                      quantity: quatityFood,
                    },
                    true,
                    () => navigate('/cart-checkout/2')
                  )
                );
              } else {
                navigate('/login');
              }
            }}
            className={`w-full border-black border text-xs font-bold rounded-full px-7 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300 py-4 lg:text-base`}
          >
            {isButtonLazyLoading & (flagRef.current === true) ? (
              <LazyButtonLoading />
            ) : (
              'BUY IT NOW'
            )}
          </button>
          <div>
            {wishListCart?.find((item) => item.product_item.id === id) ? (
              <div className='cursor-pointer group flex py-7'>
                <div className='group-hover:bg-[#f1252b] p-4 rounded-full border-2 group-hover:border-2 group-hover:border-[#f1252b] ease-out duration-300'>
                  <HeartSVG
                    className='group-hover:fill-[#fff]'
                    fill='#f1252b'
                  />
                </div>
                <p className='group-hover:text-[#f1252b] ml-2 my-auto text-base'>
                  Browse wishlist
                </p>
              </div>
            ) : (
              <div
                className='cursor-pointer group flex py-7'
                onClick={() => {
                  if (currentUser) {
                    dispatch(handleAddWishList(productURL));
                  } else {
                    navigate('/login');
                  }
                }}
              >
                <div className='group-hover:bg-[#f1252b] p-4 rounded-full border-2 group-hover:border-2 group-hover:border-[#f1252b] ease-out duration-300'>
                  <HeartSVG
                    className='group-hover:fill-[#fff]'
                    fill='#8d8d8d'
                  />
                </div>
                <p className='group-hover:text-[#f1252b] ml-2 my-auto text-base'>
                  Add to wishlist
                </p>
              </div>
            )}
          </div>
          <hr />
          <div className='py-4'>
            <p className='text-xs text-[#8d8d8d]'>
              SKU: <span className='text-black'>{sku}</span>
            </p>
            <p className='text-xs text-[#8d8d8d]'>
              CATEGORY:
              {categories?.map((item, index) => (
                <span key={index} className='text-black uppercase'>
                  {item.name},
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <hr className='border-t mt-6' />
      <div className='mt-6'>
        <Tabs defaultActiveKey='1' centered large onChange={onChangeTab}>
          <TabPane
            className='text-[#8d8d8d] text-base leading-7 mt-6 lg:mb-12'
            tab='Description'
            key='1'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </TabPane>
          <TabPane
            className='text-[#8d8d8d]'
            tab={`Reviews (${countReview})`}
            key='2'
          >
            <FoodReview
              productId={id}
              productName={name}
              reviewList={reviewList}
              countReview={countReview}
              dimensions={dimensions}
            />
          </TabPane>
        </Tabs>
      </div>
      <hr className='border-t mt-6' />
      <RelatedProducts relatedProducts={related_products} />
    </Form>
  );
};
