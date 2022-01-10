import Style from '../styles/ProductImage.styled';

function ProductImage({ src, title }: { src?: string; title: string }) {
  return (
    <Style>
      <img src={src} alt={title} />
    </Style>
  );
}

export default ProductImage;
