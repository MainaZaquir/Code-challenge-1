function calculateNetSalary(grossSalary) {
    // Constants for tax rates
    const Paye_rate = 0.3;
    const NHIF_rate = 0.05;
    const NSSF_rate = 0.06;

    // Calculating deductions and the Net salary
    const Payee = grossSalary * Paye_rate;
    const NHIFDeductions = grossSalary * NHIF_rate;
    const NSSFDeductions = grossSalary * NSSF_rate;
    const NetSalary = grossSalary - (Payee + NHIFDeductions + NSSFDeductions);

    return {
        grossSalary,
        Payee,
        NHIFDeductions,
        NSSFDeductions,
        NetSalary,
    };
}

const grossSalary = 50000; // Input gross salary
const salaryComponents = calculateNetSalary(grossSalary);

console.log(`Gross Salary: ${salaryComponents.grossSalary}`);
console.log(`Payee (Tax): ${salaryComponents.Payee}`);
console.log(`NHIF Deductions: ${salaryComponents.NHIFDeductions}`);
console.log(`NSSF Deductions: ${salaryComponents.NSSFDeductions}`);
console.log(`Net Salary: ${salaryComponents.NetSalary}`);