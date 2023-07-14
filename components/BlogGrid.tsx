"use client";
import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useRouter } from 'next/navigation'
import { Avatar, Card, Skeleton, Row, Col } from "antd";
import { Blog } from "@/type";

const { Meta } = Card;

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Card
      style={{ width: 400, marginTop: 16 }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Skeleton loading={true} avatar active>
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
          }
          title={blog.title}
          description="This is the description"
        />
      </Skeleton>
    </Card>
  );
};

const BlogGrid = ({ blogs }: { blogs: Blog[] }) => {
  const router = useRouter()

  return (
    <Row gutter={16}>
      {blogs.length > 0 &&
        blogs.map((item: Blog, index: number) => {
          return (
            <Col span={8} onClick={() => router.push(`blog/${item.id}`)} key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
              <BlogCard blog={item} />
            </Col>
          );
        })}
    </Row>
  );
};

export default BlogGrid;
