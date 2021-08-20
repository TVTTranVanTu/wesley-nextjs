import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/img/logo.png";
import { fetchCategoriesRequest } from "../../redux/actions/categoriesActions";
import { RootState } from "../../redux/reducers/rootReducer";
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { pending, categories, error } = useSelector(
    (state: RootState) => state.categories
  );
  console.log(categories);

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, [dispatch]);
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <Image alt="logo" src={logo} />
            <h2>Hoạt hình 3D</h2>
          </div>
          <div className="header-right">
            <ul className="list-menu">
              <li className="menu-item">
                <Link href="/categories">Thể loại</Link>
                <ul className="dropdown__box">
                  {pending ? (
                    ""
                  ) : error ? (
                    ""
                  ) : (
                    <>
                      {categories.map((category, index) => (
                        <li className="dropdown__item" key={index}>
                          <Link
                            href={`/${category.categoryname
                              .replace(
                                /\u0300|\u0301|\u0303|\u0309|\u0323/g,
                                ""
                              )
                              .replace(/\u02C6|\u0306|\u031B/g, "")
                              .replace(/\s/g, "-")}`}
                          >
                            {category.categoryname}
                          </Link>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </li>
              <li className="menu-item">
                <Link href="/about">Thông tin</Link>
              </li>
              <li className="menu-item">
                <Link href="/contact">Liên hệ</Link>
              </li>
              <li className="menu-item">
                <Link href="/login">Đăng nhập</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
