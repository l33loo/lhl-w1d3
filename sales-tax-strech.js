// Given the following data, implement a function that calculates
// the total sales and total tax, grouped by company.
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  let result = new Object;
  for (let i = 0; i < salesData.length; i++) {
    let totSales = 0;
    let totTaxes = 0;
    for (let j = 0; j < salesData[i].sales.length; j++) {
       totSales += salesData[i].sales[j];
       totTaxes += salesData[i].sales[j] * taxRates[salesData[i].province];
    }
    let company = salesData[i].name;
    if (!result[company]) {
      result[company] = {
        totalSales: totSales,
        totalTaxes: totTaxes
      };
    } else {
      result[company].totalSales += totSales;
      result[company].totalTaxes += totTaxes;
    }
  }
  return result;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
