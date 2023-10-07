const BasicSalary = 500000; // Input basic salary
const Benefits = 50000; // Input benefits

// Constants for tax rates
const Paye_rate = 0.3;
const NHIF_rate = 0.05;
const NSSF_rate = 0.06;

// Calculating deductions and the Net salary
const Payee = BasicSalary * Paye_rate;
const NHIFDeductions = Benefits * NHIF_rate;
const NSSFDeductions = BasicSalary * NSSF_rate;
const GrossSalary = BasicSalary + Benefits;
const NetSalary = GrossSalary - (Payee + NHIFDeductions + NSSFDeductions);

console.log(`Basic Salary: ${BasicSalary}`);
console.log(`Benefits: ${Benefits}`);
console.log(`Payee (Tax): ${Payee}`);
console.log(`NHIF Deductions: ${NHIFDeductions}`);
console.log(`NSSF Deductions: ${NSSFDeductions}`);
console.log(`Gross Salary: ${GrossSalary}`);
console.log(`Net Salary: ${NetSalary}`);