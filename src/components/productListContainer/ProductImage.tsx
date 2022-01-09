import Style from '../styles/ProductImage.styled';

function ProductImage({ src, title }: { src: string; title: string }) {
  return (
    <Style>
      <img src={src} alt="" />
    </Style>
  );
}

export default ProductImage;
