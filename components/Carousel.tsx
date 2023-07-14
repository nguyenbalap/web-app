'use client'
import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '240px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselComponent: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>Page 1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Page 2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Page 3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Page 4</h3>
    </div>
  </Carousel>
);

export default CarouselComponent;