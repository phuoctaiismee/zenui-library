import React, {useState} from 'react';

// react helmet
import {Helmet} from 'react-helmet';

// components
import ContentHeader from '../../../../../Shared/ContentHeader';
import OverviewFooter from '../../../../../Shared/OverviewFooter';
import Showcode from '../../../../../Shared/ShowCode';

// contents for scrollspy
import {skeletonContents} from '../../../../../Utils/ContentsConfig/FeedbackContents';
import {useScrollSpy} from '../../../../../CustomHooks/useScrollSpy';

const Skeleton = () => {
    const sectionIds = skeletonContents.map((item) => item.href.slice(1));
    const activeSection = useScrollSpy(sectionIds);

    // cardSkeletonPreview
    const [cardSkeletonPreview, setCardSkeletonPreview] = useState(true);
    const [cardSkeletonCode, setCardSkeletonCode] = useState(false);

    const handleCardSkeletonPreview = () => {
        setCardSkeletonPreview(true);
        setCardSkeletonCode(false);
    };

    const handleCardSkeletonCode = () => {
        setCardSkeletonCode(true);
        setCardSkeletonPreview(false);
    };

    // imageGellaryPreview
    const [imageGellaryPreview, setImageGellaryPreview] = useState(true);
    const [imageGellaryCode, setImageGellaryCode] = useState(false);

    const handleImageGellaryPreview = () => {
        setImageGellaryPreview(true);
        setImageGellaryCode(false);
    };

    const handleImageGellaryCode = () => {
        setImageGellaryCode(true);
        setImageGellaryPreview(false);
    };

    // socialPostPreview
    const [socialPostPreview, setSocialPostPreview] = useState(true);
    const [socialPostCode, setSocialPostCode] = useState(false);

    const handleSocialPostPreview = () => {
        setSocialPostPreview(true);
        setSocialPostCode(false);
    };

    const handleSocialPostCode = () => {
        setSocialPostCode(true);
        setSocialPostPreview(false);
    };

    // product details skeleton
    const [productDetailsPreview, setProductDetailsPreview] = useState(true);
    const [productDetailsCode, setProductDetailsCode] = useState(false);

    const handleProductDetailsPreview = () => {
        setProductDetailsPreview(true);
        setProductDetailsCode(false);
    };

    const handleProductDetailsCode = () => {
        setProductDetailsCode(true);
        setProductDetailsPreview(false);
    };

    // blog skeleton
    const [blogSkeletonPreview, setBlogSkeletonPreview] = useState(true);
    const [blogSkeletonCode, setBlogSkeletonCode] = useState(false);

    const handleBlogSkeletonPreview = () => {
        setBlogSkeletonPreview(true);
        setBlogSkeletonCode(false);
    };

    const handleBlogSkeletonCode = () => {
        setBlogSkeletonCode(true);
        setBlogSkeletonPreview(false);
    };

    // shine skeleton
    const [shineSkeletonPreview, setShineSkeletonPreview] = useState(true);
    const [shineSkeletonCode, setShineSkeletonCode] = useState(false);

    const handleShineSkeletonPreview = () => {
        setShineSkeletonPreview(true);
        setShineSkeletonCode(false);
    };

    const handleShineSkeletonCode = () => {
        setShineSkeletonCode(true);
        setShineSkeletonPreview(false);
    };

    return (
        <>
            <aside className='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
                <div className='w-full 425px:w-[80%]'>
                    <ContentHeader text={'Card Skeleton'} id={'card_skeleton'}/>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        This is a card skeleton component. Display placeholder content while
                        the actual content is loading.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    cardSkeletonPreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    cardSkeletonPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleCardSkeletonPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    cardSkeletonCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleCardSkeletonCode}
                            >
                                Code
                            </button>
                        </div>
                        {cardSkeletonPreview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div
                                    className='w-full 425px:w-[400px] border border-[#00000017] animate-pulse rounded-md'>
                                    <div className='w-full bg-border h-[130px] relative'>
                                        <img
                                            className='w-[120px] h-[120px] rounded-full bg-[#cecece] absolute bottom-[-40%] right-1/2 transform translate-x-1/2'/>
                                    </div>

                                    <div className='flex flex-col gap-3 items-center justify-center w-full py-8 mt-12'>
                                        <h1 className='w-[70%] h-[35px] bg-border'></h1>
                                        <p className='w-[50%] h-[20px] bg-border'></p>
                                    </div>

                                    <div
                                        className=' border-t p-4 border-gray-200 w-full flex items-center justify-between'>
                                        <div className='w-[30%] flex flex-col gap-2'>
                                            <h1 className=' h-[35px] bg-border'></h1>
                                            <p className='h-[20px] bg-border'></p>
                                        </div>

                                        <div className='w-[30%] flex flex-col gap-2'>
                                            <h1 className='h-[35px] bg-border'></h1>
                                            <p className='h-[20px] bg-border'></p>
                                        </div>

                                        <div className=' w-[30%] flex flex-col gap-2'>
                                            <h1 className='h-[35px] bg-border'></h1>
                                            <p className='h-[20px] bg-border'></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {cardSkeletonCode && (
                            <Showcode
                                code="
import React from 'react';

const CardSkeleton = () => {
  return (
    <div className='w-[400px] border border-[#00000017] animate-pulse rounded-md'>

    // Background image & profile image
      <div className='w-full bg-[#e5eaf2] h-[130px] relative'>
        <img className='w-[120px] h-[120px] rounded-full bg-[#cecece] absolute bottom-[-40%] right-1/2 transform translate-x-1/2' />
      </div>

      // Name & Bio
      <div className='flex flex-col gap-3 items-center justify-center w-full py-8 mt-12'>
        <h1 className='w-[70%] h-[35px] bg-[#e5eaf2]'></h1>
        <p className='w-[50%] h-[20px] bg-[#e5eaf2]'></p>
      </div>

      // Follower count
      <div className='border-t p-4 border-gray-200 w-full flex items-center justify-between'>
        <div className='w-[30%] flex flex-col gap-2'>
          <h1 className='h-[35px] bg-[#e5eaf2]'></h1>
          <p className='h-[20px] bg-[#e5eaf2]'></p>
        </div>

        <div className='w-[30%] flex flex-col gap-2'>
          <h1 className='h-[35px] bg-[#e5eaf2]'></h1>
          <p className='h-[20px] bg-[#e5eaf2]'></p>
        </div>

        <div className='w-[30%] flex flex-col gap-2'>
          <h1 className='h-[35px] bg-[#e5eaf2]'></h1>
          <p className='h-[20px] bg-[#e5eaf2]'></p>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
              "
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            text={'image gallery skeleton'}
                            id={'image_gallery_skeleton'}
                        />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        This is a grid image gallery skeleton component. Display
                        placeholders for images while loading content.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    imageGellaryPreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    imageGellaryPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleImageGellaryPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    imageGellaryCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleImageGellaryCode}
                            >
                                Code
                            </button>
                        </div>
                        {imageGellaryPreview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div className='animate-pulse'>
                                    <div className='flex gap-5'>
                                        <img className='w-[200px] h-[300px] bg-border'/>

                                        <div className='flex flex-col gap-5'>
                                            <img className='w-[200px] h-[140px] bg-border'/>

                                            <img className='w-[200px] h-[140px] bg-border'/>
                                        </div>
                                    </div>

                                    <img className='w-full h-[150px] mt-5 bg-border'/>
                                </div>
                            </div>
                        )}

                        {imageGellaryCode && (
                            <Showcode
                                code='
import React from "react";

const ImageGallery = () => {
  return (
    <div className=" animate-pulse">
      <div className="flex gap-5">
      // first iamge
        <img className="w-[200px] h-[300px] bg-[#e5eaf2]" />

        // second & third image
        <div className="flex flex-col gap-5">
          <img className="w-[200px] h-[140px] bg-[#e5eaf2]" />
          <img className="w-[200px] h-[140px] bg-[#e5eaf2]" />
        </div>
      </div>

      // bottom image
      <img className="w-full h-[150px] mt-5 bg-[#e5eaf2]" />
    </div>
  );
};

export default ImageGallery;

              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            text={'social post skeleton'}
                            id={'social_post_skeleton'}
                        />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        This is a social card skeleton component. Show placeholders for
                        social media content while it loads.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    socialPostPreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    socialPostPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleSocialPostPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    socialPostCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleSocialPostCode}
                            >
                                Code
                            </button>
                        </div>
                        {socialPostPreview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div
                                    className='w-full 425px:w-[450px] bg-secondary p-6 border border-border rounded animate-pulse'>
                                    <div className='flex items-center'>
                                        <div className='w-[40%] 425px:w-[20%]'>
                                            <img className='w-[60px] h-[60px] rounded-full bg-border'/>
                                        </div>

                                        <div className='flex flex-col gap-3 w-[80%]'>
                                            <h1 className='w-[60%] h-[25px] bg-border'></h1>
                                            <p className='w-[80%] h-[15px] bg-border'></p>
                                        </div>
                                    </div>

                                    <div className='mt-10 flex flex-col gap-3'>
                                        <p className='w-[90%] h-[15px] bg-border'></p>
                                        <p className='w-[80%] h-[15px] bg-border'></p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {socialPostCode && (
                            <Showcode
                                code='
import React from "react";

const SocialPostSkeleton = () => {
  return (
    <div className="w-[450px] bg-[#ffff] p-6 border border-[#e5eaf2] rounded animate-pulse">
      <div className="flex items-center">
        <div className="w-[20%]">
          <img className="w-[60px] h-[60px] rounded-full bg-[#e5eaf2]" />
        </div>

        <div className="flex flex-col gap-3 w-[80%]">
          <h1 className="w-[60%] h-[25px] bg-[#e5eaf2]"></h1>
          <p className="w-[80%] h-[15px] bg-[#e5eaf2]"></p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <p className="w-[90%] h-[15px] bg-[#e5eaf2]"></p>
        <p className="w-[80%] h-[15px] bg-[#e5eaf2]"></p>
      </div>
    </div>
  );
};

export default SocialPostSkeleton;
        '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            text={'product details skeleton'}
                            id={'product_details_skeleton'}
                        />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        This is the skeleton of the product details page. You can use this
                        skeleton on the product details page of any of your e-commerce
                        websites. Each section is marked with comments within the code.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    productDetailsPreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    productDetailsPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleProductDetailsPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    productDetailsCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleProductDetailsCode}
                            >
                                Code
                            </button>
                        </div>
                        {productDetailsPreview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div className='flex gap-6 w-full animate-pulse'>
                                    <div>
                                        <img className='w-[450px] h-[300px] bg-border'/>
                                        <div className='flex gap-3 mt-3'>
                                            <img className='w-[130px] h-[100px] bg-border'/>
                                            <img className='w-[130px] h-[100px] bg-border'/>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-4 w-full'>
                                        <h2 className='w-[100%] h-[35px] bg-border'></h2>
                                        <p className='w-[100%] h-[200px] bg-border'></p>
                                        <span className='w-[30%] h-[30px] bg-border'></span>
                                        <div className='flex items-center justify-between w-full'>
                                            <button className='w-[30%] h-[40px] bg-border'></button>
                                            <i className='w-[40px] h-[40px] rounded-full bg-border'></i>
                                        </div>

                                        <button className='w-[35%] h-[40px] bg-border'></button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {productDetailsCode && (
                            <Showcode
                                code='
import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="flex gap-6 w-full animate-pulse">
      // product image & prodcut sub images
      <div>
        <img className="w-[450px] h-[300px] bg-[#e5eaf2]" />
        <div className="flex gap-3 mt-3">
          <img className="w-[130px] h-[100px] bg-[#e5eaf2]" />
          <img className="w-[130px] h-[100px] bg-[#e5eaf2]" />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        // product name
        <h2 className="w-[100%] h-[35px] bg-[#e5eaf2]"></h2>
        // product description
        <p className="w-[100%] h-[200px] bg-[#e5eaf2]"></p>
        // product price
        <span className="w-[30%] h-[30px] bg-[#e5eaf2]"></span>
        <div className="flex items-center justify-between w-full">
          // quantity button
          <button className="w-[30%] h-[40px] bg-[#e5eaf2]"></button>
          // favorite button
          <i className="w-[40px] h-[40px] rounded-full bg-[#e5eaf2]"></i>
        </div>
        // add to cart button
        <button className="w-[35%] h-[40px] bg-[#e5eaf2]"></button>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;

              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            text={'post list skeleton'}
                            id={'post_list_skeleton'}
                        />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        A skeleton screen for a post list, displaying placeholder elements
                        such as rectangles and lines, mimicking the structure of the content
                        while it loads.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    socialPostPreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    socialPostPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleSocialPostPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    socialPostCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleSocialPostCode}
                            >
                                Code
                            </button>
                        </div>
                        {socialPostPreview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div className='w-full flex flex-col gap-[20px]'>
                                    <div
                                        className='w-full mx-auto 640px:w-[450px] bg-secondary p-3 rounded-md border border-border boxShadow animate-pulse'>
                                        <div className='flex items-center gap-[20px]'>
                                            <div className='w-[40%] 425px:w-[20%]'>
                                                <img className='w-[80px] h-[80px] rounded-full bg-border'/>
                                            </div>

                                            <div className='flex flex-col gap-[10px] w-[80%]'>
                                                <h1 className='w-[80%] h-[25px] bg-border rounded-md'></h1>

                                                <div className='flex flex-col gap-2'>
                                                    <p className='w-[90%] h-[7px] bg-border rounded-md'></p>
                                                    <p className='w-[80%] h-[7px] bg-border rounded-md'></p>
                                                    <p className='w-[50%] h-[7px] bg-border rounded-md'></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className='w-full mx-auto 640px:w-[450px] bg-secondary p-3 rounded-md border border-border boxShadow animate-pulse'>
                                        <div className='flex items-center gap-[20px]'>
                                            <div className='w-[40%] 425px:w-[20%]'>
                                                <img className='w-[80px] h-[80px] rounded-full bg-border'/>
                                            </div>

                                            <div className='flex flex-col gap-[10px] w-[80%]'>
                                                <h1 className='w-[80%] h-[25px] bg-border rounded-md'></h1>

                                                <div className='flex flex-col gap-2'>
                                                    <p className='w-[90%] h-[7px] bg-border rounded-md'></p>
                                                    <p className='w-[80%] h-[7px] bg-border rounded-md'></p>
                                                    <p className='w-[50%] h-[7px] bg-border rounded-md'></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className='w-full mx-auto 640px:w-[450px] bg-secondary p-3 rounded-md border border-border boxShadow animate-pulse'>
                                        <div className='flex items-center gap-[20px]'>
                                            <div className='w-[40%] 425px:w-[20%]'>
                                                <img className='w-[80px] h-[80px] rounded-full bg-border'/>
                                            </div>

                                            <div className='flex flex-col gap-[10px] w-[80%]'>
                                                <h1 className='w-[80%] h-[25px] bg-border rounded-md'></h1>

                                                <div className='flex flex-col gap-2'>
                                                    <p className='w-[90%] h-[7px] bg-border rounded-md'></p>
                                                    <p className='w-[80%] h-[7px] bg-border rounded-md'></p>
                                                    <p className='w-[50%] h-[7px] bg-border rounded-md'></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {socialPostCode && (
                            <Showcode
                                code='
import React from "react";

const Skeleton = () => {

    return (
        <div className="w-full flex flex-col gap-[20px]">
            <div
                className="w-full mx-auto sm:w-[450px] bg-secondary p-3 rounded-md border border-border boxShadow animate-pulse">
                <div className="flex items-center gap-[20px]">
                    <div className="w-[40%] 425px:w-[20%]">
                        <img className="w-[80px] h-[80px] rounded-full bg-border"/>
                    </div>

                    <div className="flex flex-col gap-[10px] w-[80%]">
                        <h1 className="w-[80%] h-[25px] bg-border rounded-md"></h1>

                        <div className="flex flex-col gap-2">
                            <p className="w-[90%] h-[7px] bg-border rounded-md"></p>
                            <p className="w-[80%] h-[7px] bg-border rounded-md"></p>
                            <p className="w-[50%] h-[7px] bg-border rounded-md"></p>
                        </div>
                    </div>
                </div>


            </div>
            <div
                className="w-full mx-auto sm:w-[450px] bg-secondary p-3 rounded-md border border-border boxShadow animate-pulse">
                <div className="flex items-center gap-[20px]">
                    <div className="w-[40%] 425px:w-[20%]">
                        <img className="w-[80px] h-[80px] rounded-full bg-border"/>
                    </div>

                    <div className="flex flex-col gap-[10px] w-[80%]">
                        <h1 className="w-[80%] h-[25px] bg-border rounded-md"></h1>

                        <div className="flex flex-col gap-2">
                            <p className="w-[90%] h-[7px] bg-border rounded-md"></p>
                            <p className="w-[80%] h-[7px] bg-border rounded-md"></p>
                            <p className="w-[50%] h-[7px] bg-border rounded-md"></p>
                        </div>
                    </div>
                </div>


            </div>
            <div
                className="w-full mx-auto sm:w-[450px] bg-secondary p-3 rounded-md border border-border boxShadow animate-pulse">
                <div className="flex items-center gap-[20px]">
                    <div className="w-[40%] 425px:w-[20%]">
                        <img className="w-[80px] h-[80px] rounded-full bg-border"/>
                    </div>

                    <div className="flex flex-col gap-[10px] w-[80%]">
                        <h1 className="w-[80%] h-[25px] bg-border rounded-md"></h1>

                        <div className="flex flex-col gap-2">
                            <p className="w-[90%] h-[7px] bg-border rounded-md"></p>
                            <p className="w-[80%] h-[7px] bg-border rounded-md"></p>
                            <p className="w-[50%] h-[7px] bg-border rounded-md"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;
        '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            text={'blog post skeleton'}
                            id={'blog_post_skeleton'}
                        />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        A skeleton screen for a blog post, showing placeholders for the
                        title, text blocks, and images, simulating the layout while the
                        content is loading.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    blogSkeletonPreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    blogSkeletonPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleBlogSkeletonPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    blogSkeletonCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleBlogSkeletonCode}
                            >
                                Code
                            </button>
                        </div>
                        {blogSkeletonPreview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div className='w-full flex flex-col gap-[20px]'>
                                    <div
                                        className='w-full 640px:w-[450px] mx-auto bg-secondary p-4 rounded-md border border-border boxShadow animate-pulse'>
                                        <div className='flex gap-[20px]'>
                                            <div className='flex flex-col justify-between w-full 640px:w-[80%]'>
                                                <div className='flex flex-col gap-2'>
                                                    <p className='w-[90%] h-[7px] bg-border rounded-md'></p>
                                                    <p className='w-[90%] h-[7px] bg-border rounded-md'></p>
                                                    <p className='w-[80%] h-[7px] bg-border rounded-md'></p>
                                                </div>

                                                <div className='flex items-center gap-[10px] w-full'>
                                                    <img className='w-[40px] h-[40px] rounded-full bg-border'/>

                                                    <div className='flex flex-col gap-2 w-[80%]'>
                                                        <p className='w-[60%] h-[7px] bg-border rounded-md'></p>
                                                        <span className='w-[50%] h-[7px] bg-border rounded-md'></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='w-[40%] 425px:w-[35%]'>
                                                <img className='w-[120px] h-[120px] rounded-md bg-border'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {blogSkeletonCode && (
                            <Showcode
                                code='
import React from "react";

const Skeleton = () => {

    return (
        <div className="w-full flex flex-col gap-[20px]">
            <div
                className="w-full sm:w-[450px] mx-auto bg-secondary p-4 rounded-md border border-border boxShadow animate-pulse">
                <div className="flex gap-[20px]">
                    <div className="flex flex-col justify-between w-full sm:w-[80%]">
                        <div className="flex flex-col gap-2">
                            <p className="w-[90%] h-[7px] bg-border rounded-md"></p>
                            <p className="w-[90%] h-[7px] bg-border rounded-md"></p>
                            <p className="w-[80%] h-[7px] bg-border rounded-md"></p>
                        </div>

                        <div className="flex items-center gap-[10px] w-full">
                            <img className="w-[40px] h-[40px] rounded-full bg-border"/>

                            <div className="flex flex-col gap-2 w-[80%]">
                                <p className="w-[60%] h-[7px] bg-border rounded-md"></p>
                                <span className="w-[50%] h-[7px] bg-border rounded-md"></span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[40%] 425px:w-[35%]">
                        <img className="w-[120px] h-[120px] rounded-md bg-border"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;
        '
                            />
                        )}
                    </div>

                    {/*Shine Skeletion*/}
                    <div className='mt-8'>
                        <ContentHeader text={'Shine Skeleton'} id={'shine_skeleton'}/>
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        This is a card skeleton component. Display placeholder content while
                        the actual content is loading.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    shineSkeletonPreview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    shineSkeletonPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleShineSkeletonPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    cardSkeletonCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleShineSkeletonCode}
                            >
                                Code
                            </button>
                        </div>
                        {shineSkeletonPreview && (
                            <div className="flex py-8 items-center justify-center">
                                <div className="grid w-[600px] grid-cols-3 gap-6">

                                    <div
                                        className="relative space-y-5 border border-slate-100 dark:border-slate-700 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-slate-100/10 before:bg-gradient-to-r before:from-transparent before:via-slate-100/70 dark:before:via-slate-100/10 before:to-transparent">
                                        <div className="h-24 rounded-lg bg-slate-100/80"></div>
                                        <div className="space-y-3">
                                            <div className="h-3 w-3/5 rounded-lg bg-slate-100/50"></div>
                                            <div className="h-3 w-4/5 rounded-lg bg-slate-100/60"></div>
                                            <div className="h-3 w-2/5 rounded-lg bg-slate-100/60"></div>
                                        </div>
                                    </div>

                                    <div
                                        className="relative space-y-5 border border-slate-100 dark:border-slate-700 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-slate-100/10 before:bg-gradient-to-r before:from-transparent before:via-slate-100/70 dark:before:via-slate-100/10 before:to-transparent">
                                        <div className="h-24 rounded-lg bg-slate-100/80"></div>
                                        <div className="space-y-3">
                                            <div className="h-3 w-3/5 rounded-lg bg-slate-100/50"></div>
                                            <div className="h-3 w-4/5 rounded-lg bg-slate-100/60"></div>
                                            <div className="h-3 w-2/5 rounded-lg bg-slate-100/60"></div>
                                        </div>
                                    </div>

                                    <div
                                        className="relative space-y-5 border border-slate-100 dark:border-slate-700 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-slate-100/10 before:bg-gradient-to-r before:from-transparent before:via-slate-100/70 dark:before:via-slate-100/10 before:to-transparent">
                                        <div className="h-24 rounded-lg bg-slate-100/80"></div>
                                        <div className="space-y-3">
                                            <div className="h-3 w-3/5 rounded-lg bg-slate-100/50"></div>
                                            <div className="h-3 w-4/5 rounded-lg bg-slate-100/60"></div>
                                            <div className="h-3 w-2/5 rounded-lg bg-slate-100/60"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}


                        {shineSkeletonCode && (
                            <Showcode
                                code="
// Add keyframes in tailwind.config.js
        keyframes: {
            shimmer: {
                '100%': {
                    transform: 'translateX(100%)',
                },
            },
        },
//_________COMPONENT_____________
import React from 'react';

const ShineSkeleton = () => {
  return (
    <div className='flex py-8 items-center justify-center'>
        <div className='grid w-[600px] grid-cols-3 gap-6'>

        // Card 1
        <div className='relative space-y-5 border border-slate-100 dark:border-slate-700 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-slate-100/10 before:bg-gradient-to-r before:from-transparent before:via-slate-100/70 dark:before:via-slate-100/10 before:to-transparent'>
           <div className='h-24 rounded-lg bg-slate-100/80'></div>
              <div className='space-y-3'>
                <div className='h-3 w-3/5 rounded-lg bg-slate-100/50'></div>
                <div className='h-3 w-4/5 rounded-lg bg-slate-100/60'></div>
                <div className='h-3 w-2/5 rounded-lg bg-slate-100/60'></div>
            </div>
        </div>

        // Card 2
        <div className='relative space-y-5 border border-slate-100 dark:border-slate-700 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-slate-100/10 before:bg-gradient-to-r before:from-transparent before:via-slate-100/70 dark:before:via-slate-100/10 before:to-transparent'>
            <div className='h-24 rounded-lg bg-slate-100/80'></div>
            <div className='space-y-3'>
                <div className='h-3 w-3/5 rounded-lg bg-slate-100/50'></div>
                <div className='h-3 w-4/5 rounded-lg bg-slate-100/60'></div>
                <div className='h-3 w-2/5 rounded-lg bg-slate-100/60'></div>
            </div>
        </div>

        // Card 3
        <div className='relative space-y-5 border border-slate-100 dark:border-slate-700 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-slate-100/10 before:bg-gradient-to-r before:from-transparent before:via-slate-100/70 dark:before:via-slate-100/10 before:to-transparent'>
            <div className='h-24 rounded-lg bg-slate-100/80'></div>
            <div className='space-y-3'>
                <div className='h-3 w-3/5 rounded-lg bg-slate-100/50'></div>
                <div className='h-3 w-4/5 rounded-lg bg-slate-100/60'></div>
                <div className='h-3 w-2/5 rounded-lg bg-slate-100/60'></div>
            </div>
        </div>

    </div>
    </div>
  );
};

export default ShineSkeleton;
              "
                            />
                        )}
                    </div>

                    <OverviewFooter
                        backUrl='/components/tabs'
                        backName='tabs'
                        forwardName='alert message'
                        forwardUrl='/components/alert-message'
                    />
                </div>

                <div className='1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[37%]'>
                    <h2 className='text-[0.9rem] font-[600] text-text tracking-widest'>
                        CONTENTS
                    </h2>
                    {skeletonContents.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`${
                                activeSection === item.href.slice(1) &&
                                '!text-primary !border-primary'
                            } text-[0.9rem] text-text border-l border-transparent pl-4`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </aside>
            <Helmet>
                <title>Feedback - Skeleton</title>
            </Helmet>
        </>
    );
};

export default Skeleton;
