import React from "react";
import { Card, List, Button, StopOutlined } from "antd";
import PropTypes from "prop-types";

const FollowList = ({ header, data }) => {
  console.log(data);

  return (
    <List
      grid={{ gutter: 4, xs: 3, md: 3 }}
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: "center" }}>
          <Button>더보기</Button>
        </div>
      }
      dataSource={data}
      bordered
      renderItem={(item) => (
        <List.Item>
          <Card title={item.nickname}>Card content</Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
