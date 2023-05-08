import React, {useState} from "react";
import '../categoryStyle.css';

type CategoryState = {
  [key: string]: Boolean;
}

export const CategoryTest = () => {
  const menuList = ["전문가방송","카톡문자","아카데미","투자전략","공지사항","X1신규가이드","로보스탁","X1 NOTICE"];
  const [hide, setHide] = useState<CategoryState>({
    m1: false,
    m2: false,
    m3: false,
    m4: false,
    m5: false,
    m6: false,
    m7: false,
    m8: false,
  })

  const mouseEvent = (menuName: string, bool: boolean) => {
    const change = {...hide};
    change[menuName] = bool;
    setHide(change);
  };  

  return (
    <nav className="nav">
      <ul className="navContainer">
        {menuList.map((menu, idx) => (
            <li
              key = {idx}
              className={hide[menu] ? "active" : "none"}
              onMouseOver={() => mouseEvent(menu, true)}
              onMouseOut={() => mouseEvent(menu, false)}
            >
              <p>{menu}</p>
            </li>
          ))}
      </ul>
      <div className="detailMenu">
        {menuList.map((v, idx) => (
          <ul
            key = {idx}
            onMouseEnter={() => mouseEvent(v, true)}
            onMouseLeave={() => mouseEvent(v, false)}
          >
            <li>{`메뉴${idx + 1}-${1}`}</li>
            <li>{`메뉴${idx + 1}-${2}`}</li>
            <li>{`메뉴${idx + 1}-${3}`}</li>
            <li>{`메뉴${idx + 1}-${4}`}</li>
          </ul>
        ))}
      </div>
    </nav>
  );
}