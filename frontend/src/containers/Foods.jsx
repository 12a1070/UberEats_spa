import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

export const Foods = () => {
  const { restaurantsId } = useParams();

  return (
    <Fragment>
      フード一覧
      <p>restaurantsId は {restaurantsId} です</p>
    </Fragment>
  );
}
