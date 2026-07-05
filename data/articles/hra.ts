import { CalculatorArticle } from "../types";

export const hraArticle: CalculatorArticle = {
  title: "HRA Calculator – Calculate House Rent Allowance Exemption Online",

  introduction:
    "House Rent Allowance (HRA) is one of the most important salary components for salaried employees living in rented accommodation. Under the Income Tax Act, eligible employees can claim HRA exemption and reduce their taxable income. Our HRA Calculator helps estimate the amount of HRA exemption based on your salary, HRA received, rent paid and city of residence. It is a useful tool for tax planning and understanding how much tax can be saved through HRA benefits.",

  sections: [
    {
      heading: "What is an HRA Calculator?",

      content: `
An HRA Calculator is an online income tax planning tool that estimates the House Rent Allowance exemption available under the Income Tax Act.

Instead of calculating exemption manually, the calculator instantly estimates:

• Eligible HRA Exemption

• Taxable HRA

• Rent Considered

• Salary Used for Calculation

The calculator helps salaried employees understand how much tax they can save by claiming HRA exemption.
`,
    },

    {
      heading: "What is House Rent Allowance (HRA)?",

      content: `
House Rent Allowance (HRA) is an allowance provided by employers to employees for meeting rental accommodation expenses.

Employees who receive HRA as part of their salary and live in rented accommodation may claim tax exemption subject to prescribed conditions.

The exemption depends on salary, HRA received, rent paid and whether the employee resides in a metro or non-metro city.
`,
    },

    {
      heading: "Who Can Claim HRA Exemption?",

      content: `
HRA exemption is generally available to salaried employees who:

• Receive HRA as part of salary.

• Live in rented accommodation.

• Actually pay rent.

Employees living in their own house generally cannot claim HRA exemption.
`,
    },

    {
      heading: "How Does an HRA Calculator Work?",

      content: `
The calculator compares three different values prescribed under the Income Tax Act.

The lowest of these values becomes the HRA exemption.

You simply enter:

• Basic Salary

• Dearness Allowance (if applicable)

• HRA Received

• Rent Paid

• Metro / Non-Metro City

The calculator instantly estimates your tax-exempt HRA.
`,
    },

    {
      heading: "Factors Affecting HRA Exemption",

      content: `
Several factors influence your HRA exemption.

These include:

• Basic Salary

• Dearness Allowance

• HRA Received

• Monthly Rent Paid

• City of Residence

• Applicable Income Tax Rules

Higher rent and metro city residence generally increase the exemption amount.
`,
    },

    {
      heading: "Why Use an HRA Calculator?",

      content: `
The HRA Calculator simplifies tax planning.

It helps employees:

• Estimate HRA exemption.

• Calculate taxable HRA.

• Plan salary efficiently.

• Compare different rent scenarios.

• Save income tax legally.

Instead of performing complex calculations manually, accurate estimates are available instantly.
`,
    },

    {
      heading: "Example of HRA Calculation",

      content: `
Suppose your monthly Basic Salary is ₹50,000.

Monthly HRA = ₹20,000

Monthly Rent Paid = ₹18,000

City = Metro

The calculator estimates your eligible HRA exemption according to applicable income tax rules.

Any remaining HRA becomes taxable salary.
`,
    },
        {
      heading: "HRA Exemption Formula",

      content: `
The Income Tax Act allows HRA exemption based on the lowest of the following three amounts:

• Actual HRA Received

• Rent Paid − 10% of Basic Salary

• 50% of Salary (Metro Cities) OR 40% of Salary (Non-Metro Cities)

The smallest of these three values becomes the HRA exemption.

Any remaining HRA is added to taxable income.
`,
    },
  ],

  formula: {
    title: "HRA Exemption Formula",

    formula:
      "Least of (Actual HRA Received, Rent Paid − 10% Salary, 50%/40% of Salary)",

    explanation:
      "The Income Tax Act prescribes three different calculations for HRA exemption. The lowest amount among them becomes the exempt HRA while the remaining HRA is taxable.",
  },

  example: {
    title: "Practical Example",

    description: `

Basic Salary : ₹50,000/month

HRA Received : ₹20,000/month

Rent Paid : ₹18,000/month

City : Metro

Result :

Eligible HRA Exemption = Lowest of prescribed values

Remaining HRA = Taxable Income

`,
  },

  advantages: [
    "Helps reduce taxable income.",
    "Makes income tax planning easier.",
    "Provides instant HRA exemption estimates.",
    "Useful for salaried employees living in rented houses.",
    "Supports better salary structure planning.",
    "Eliminates manual calculations.",
    "Completely free and easy to use.",
    "Useful before filing income tax returns.",
  ],

  disadvantages: [
    "Available only to eligible salaried employees.",
    "Cannot be claimed without paying rent.",
    "Rules vary depending on salary and city.",
    "Incorrect information may produce inaccurate estimates.",
  ],

  tips: [
    "Keep rent receipts safely.",
    "Maintain a valid rent agreement.",
    "Update salary details correctly.",
    "Claim HRA while filing income tax returns.",
    "Review your salary breakup every year.",
    "Compare old and new tax regimes before claiming exemptions.",
    "Ensure PAN details of landlord are available if required.",
    "Consult a tax professional for complex salary structures.",
  ],

  mistakes: [
    "Claiming HRA without paying rent.",
    "Entering incorrect salary details.",
    "Ignoring metro vs non-metro rules.",
    "Not maintaining rent receipts.",
    "Choosing the wrong tax regime.",
    "Claiming higher rent than actually paid.",
    "Ignoring employer documentation requirements.",
    "Assuming entire HRA is tax-free.",
  ],

  conclusion:
    "An HRA Calculator is an essential income tax planning tool for salaried employees receiving House Rent Allowance. It estimates the tax-exempt portion of HRA based on salary, rent paid and city of residence, helping employees reduce taxable income legally. Although the final exemption depends on the Income Tax Act and salary structure, using an HRA Calculator makes tax planning simple, accurate and efficient.",
};