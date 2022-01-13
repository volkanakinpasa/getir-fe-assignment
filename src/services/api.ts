import { API_URL } from '../common/constants';
import IBrand from '../interfaces/IBrand';
import querystring from 'querystring';

const get = async ({
  size,
  offset,
  brands,
}: {
  size?: number;
  offset?: number;
  brands?: IBrand[];
}) => {
  try {
    const params = {
      manufacturer_like: brands?.map((item) => item.slug).concat(','),
      offset,
      size,
      // sort
    };

    const rawResponse = await fetch(
      `${API_URL}/products?${querystring.stringify(params)}`,
      {
        method: 'GET',
      }
    );
    return await rawResponse.json();
  } catch (error) {}
};

export { get };
