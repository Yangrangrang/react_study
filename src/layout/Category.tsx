import React, { useState , useEffect} from 'react';
import '../categoryStyle.css';
import { Container } from '@mui/material';

// 소카테고리
type SubCategoryName = {
  categoryName : string;
  name : string[];
}

// 대카테고리 name
type CategoryName = {
  name: string;
}

// 리스트
type CategoryListProps = {
  names: SubCategoryName[];
}

export const CategoryList = (props: CategoryListProps) => {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const handleMouseEnter = (categoryName: string) => {
    setCurrentCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setCurrentCategory(null);
  };

  return (
    <Container>
      <nav className="nav">
        <ul className="navContainer">
          {props.names.map((category,idx) => (
            <li
              key={category.categoryName}
              className={currentCategory === category.categoryName ? "active" : "none"}
              onMouseEnter={() => handleMouseEnter(category.categoryName)}
              onMouseLeave={handleMouseLeave}
            >
              <p>{category.categoryName}</p>
            </li>
          ))}
        </ul>

        <div className="detailMenu">
          {props.names.map((category) => (
              <ul key={category.categoryName}>
                {category.name.map((subCategory) => (
                  <li key={subCategory}>{subCategory}</li>
                ))}
              </ul>
          ))}
        </div>
      </nav>
    </Container>
  );
}






