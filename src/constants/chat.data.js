import faker from "faker";
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      // title: {
      //   display: true,
      //   text: "Highest Revenve Earned",
      // },
    },
  };
  
  const labels = [1, 2, 3, 4, 5];
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
        backgroundColor: "#0153c9",
      },
      {
        label: "Transection Amount",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
        backgroundColor: "#1fb9fc",
      },
    ],
  };
  
  export const data2 = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
        backgroundColor: "#fc6b21",
      },
      {
        label: "Transection Amount",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
        backgroundColor: "#0153c9",
      },
    ],
  };