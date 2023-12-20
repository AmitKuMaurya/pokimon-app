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


  // horizontal chART


  export const horizontal_options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    title: {
      display: false,
      text: "General SMS - 150",
    },
      layout: {
        padding: 50
      },
      datalabels: {
        font: {
          weight: "bold"
        },
        align: "end",
        anchor: "end"
      }
    }
  };
  
  
  export const horizontal_data = {
    labels: ["Very Active", "Moderatively Active", "Least Active"],
    datasets: [
      {
        data: [60, 30, 73],
        backgroundColor: ["#54abe5", "#54abe5", "#54abe5"],
      },
    ],
  };