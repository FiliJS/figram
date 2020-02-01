import React from "react";

import { Layout } from "../components/Layout";

import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";

export const Detail = ({detailId}) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};