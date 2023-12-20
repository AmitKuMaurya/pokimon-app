import React from "react";
import { Space, Table, Tag } from "antd";
import { LiaArrowRightSolid } from "react-icons/lia";
import "./customerTable.css"
import { TableData } from "../../constants/table.data";



const CustomerTable = () => {

    const columns = [
        {
          title: 'Customer Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Assets',
          dataIndex: 'assets',
          key: 'assets',
        //   render : (text) => <p>{text.amount}</p>
            render: (tags) => (
            <>
                  <p>{tags.amount}</p>
              {tags.units.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                    <>
                  <Tag color={color} key={tag}>
                    {tag.toLowerCase()}
                  </Tag>
                    </>
                );
              })}
            </>
          ),
        },
        {
          title: 'Revenue',
          dataIndex: 'revenue',
          key: 'revenue',
        },
        {
          title: 'KYC Status',
          dataIndex: 'kyc_status',
          key: 'kyc_status',
          render : (status) =>{
              {var color = status.length < 5 ? "green" : "red"
              console.log('status: ', status.length);
                if(status === "Pending"){
                    color = "orange";
                }
                } 
            return (
                <>
                <Tag color={color}>
                    {status}
                </Tag>
                </>
            )
          } 
        },
        {
          title: 'Facilitator',
          dataIndex: 'facilitator',
          key: 'facilitator',
          render : (ele)=> {
            return <div className="facilitator">
            <div>
                <p>{ele.business.name}</p>
                <p>{ele.business.user}</p>
            </div>
            <div>
            <LiaArrowRightSolid />
            </div>
            <div>
                <p>{ele.associate.name}</p>
                <p>{ele.associate.user}</p>
            </div>
            </div>
          }
        },
        {
          title: 'Zone',
          dataIndex: 'zone',
          key: 'zone',
        },
        {
          title: 'Account Type',
          dataIndex: 'account_type',
          key: 'account_type',
        },
        {
          title: 'TPA',
          key: 'tpa',
          dataIndex: 'tpa',
        },
        // {
        //   title: 'Action',
        //   key: 'action',
        //   render: (_, record) => (
        //     <Space size="middle">
        //       <a>Invite {record.name}</a>
        //       <a>Delete</a>
        //     </Space>
        //   ),
        // },
      ];

  return <Table columns={columns} dataSource={TableData} />;
};
export default CustomerTable;
