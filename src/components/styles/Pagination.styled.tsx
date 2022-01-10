import tw, { styled } from 'twin.macro';

const Pagination = styled.div`
  .pagination {
    ${tw`flex w-full justify-center items-center pt-8`}

    .page-item {
      width: 32px;
      height: 40px;
      ${tw`hidden lg:(flex justify-center items-center )`}
    }
    .page-link {
      ${tw`h-full flex justify-center items-center`}
    }

    .next,
    .prev {
      width: 58px;
      height: 40px;
      ${tw`mx-7`}
    }

    .active {
      ${tw`bg-primaryBlue text-primaryWhite`}
      border-radius: 2px;
    }
  }
`;

export default Pagination;
