import BrandItem from '../brand-item/brand-item.component';
import './directory.styles.scss';

const Directory = ({ brands }) => {
  return (
    <div className='directory-container'>
      {brands.map((brand) => (
        <BrandItem key={brand.id} brand={brand} />
      ))}
    </div>
  );
};

export default Directory;
