import React, { Fragment } from 'react';

export const Restaurants = () => {

  //=====ここから追加する=====
  useEffect(() => {
    fetchRestaurants()
    .then((data) =>
      console.log(data)
    )
  }, [])
//=====ここまで追加する=====


  return (
    <Fragment>
      レストラン一覧
    </Fragment>
  )
}
