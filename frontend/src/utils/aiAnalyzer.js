export const analyzeEmployees = (employees) => {
  let totalProductivity = 0;
  const atRisk = [];
  const productivityDrop = [];
  let topPerformer = null;

  const analyzedData = employees.map(emp => {
    let status = "Average";
    if (emp.attendancePercentage < 70 && emp.productivityScore < 60) {
      status = "Critical";
      atRisk.push(emp);
    } else if (emp.attendancePercentage > 85 && emp.productivityScore > 80) {
      status = "Excellent";
    }

    if (emp.productivityScore < 60 && emp.attendancePercentage >= 70) {
      productivityDrop.push(emp);
    }

    if (!topPerformer || emp.productivityScore > topPerformer.productivityScore) {
      topPerformer = emp;
    }

    totalProductivity += emp.productivityScore;

    return { ...emp, status };
  });

  const avgProductivity = totalProductivity / employees.length || 0;

  return {
    analyzedEmployees: analyzedData,
    atRiskEmployees: atRisk,
    productivityDrop,
    topPerformer,
    averageProductivity: avgProductivity.toFixed(2),
    insightMessage: atRisk.length > 0 
      ? `${atRisk.length} employees need immediate attention due to low attendance and productivity.`
      : "Overall company performance is stable."
  };
};
