import FilterSorting from './productFilterBar/FilterSorting';
import FilterTags from './productFilterBar/FilterTags';
import LeftBarStyle from './styles/LeftBar.styled';

function LeftBar() {
  return (
    <LeftBarStyle>
      <FilterSorting />
      <FilterTags />
    </LeftBarStyle>
  );
}

export default LeftBar;
