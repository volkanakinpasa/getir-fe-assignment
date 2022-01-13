import tw, { styled } from 'twin.macro';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Pagination from './Pagination';
import Product from './Product';
import { getProducts } from '../../redux/actions';

const ProductListContainer = styled.div`
  ${tw`w-full mt-4`}
`;

const ProductListStyle = styled.div`
  border-radius: 2px;
  box-shadow: 0px 4px 24px 0px #5d3ebc0a;
  padding: 20px;
  ${tw`w-full flex items-center justify-center h-full grid gap-5 grid-cols-2 sm:grid-cols-4 bg-primaryWhite`}
`;

function ProductList() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state: any) => {
    return state.products.products;
  });

  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 16;
  const itemLenth = 1000;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   setPageCount(Math.ceil(itemLenth / itemsPerPage));
  // }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % itemLenth;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <ProductListContainer>
      <ProductListStyle>
        {loading && <>loading</>}
        {data?.map((product: any, index: number) => (
          <Product
            key={index}
            imageUrl={product.imageUrl}
            price={product.price}
            name={product.name}
          />
        ))}
      </ProductListStyle>
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </ProductListContainer>
  );
}

export default ProductList;
