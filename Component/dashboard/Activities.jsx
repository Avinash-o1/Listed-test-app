'use client'

import React from "react";
import { Card, LineChart, Title } from "@tremor/react";
import Image from "next/image";

const Activities = () => {
  const chartdata = [
    {
      Week: '',
      "Guest": 204,
      "User": 100,
    },
    {
      Week: 'Week1',
      "Guest": 300,
      "User": 318,
    },
    {
      Week: 'Week2',
      "Guest": 256,
      "User": 201,
    },
    {
      Week: 'Week3',
      "Guest": 350,
      "User": 261,
    },
    {
      Week: 'Week4',
      "Guest": 188,
      "User": 167,
    },
  ];

  return (
    <div className="activity-card">
      <Card >
      <Title className="text">Activities <br/><span>May - June 2021<Image src="/Vector_vertical.svg" width="8" height="8" alt="dropdown"/></span></Title>
        <LineChart
          data={chartdata}
          index="Week"
          categories={["Guest", "User"]}
          colors={["pink", "lime"]}
          yAxisWidth={50}
        />
      </Card>
    </div>
  );
};

export default Activities;