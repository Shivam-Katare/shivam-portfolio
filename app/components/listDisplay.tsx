import React from 'react';
import { List, Skeleton } from 'antd';
import Image, { StaticImageData } from 'next/image';

interface DataType {
  name: string;
  description: string;
  avatar: StaticImageData | string;
  date: string;
  loading: boolean;
}

interface ListDisplayProps {
  header: string;
  data: DataType[];
}

const ListDisplay: React.FC<ListDisplayProps> = ({ header, data }) => {
  return (
    <List
      className={`demo-loadmore-list`}
      itemLayout="horizontal"
      header={<h2 className='text-[20px] font-medium'>{header}</h2>}
      dataSource={data}
      renderItem={(item: DataType) => (
        <List.Item>
          <Skeleton loading={item.loading} active>
            <List.Item.Meta
              avatar={<Image src={item.avatar} alt={item?.name} width={20} height={20} style={{borderRadius: "33px"}} />}
              title={item.name}
              description={item.description}
            />
            <div>{item.date}</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default ListDisplay;