export type ContributionType = "Contribution" | "Other Receipt";
export type ContributionSubType = "Cash Contribution" | "In-Kind Contribution";
export type PaymentMethod =
  | "Cash"
  | "Check"
  | "Money Order"
  | "Credit Card (Online"
  | "Credit Card (Paper Form"
  | "Electronic Funds Transfer";

export type InKindType =
  | "Broadcast Advertising"
  | "Fundraising Event Expenses"
  | "General Operating Expenses"
  | "Literature/Brochures/Printing"
  | "Management Services"
  | "Newspaper and Other Periodical Advertising"
  | "Other Advertising"
  | "Petition Circulators"
  | "Postage"
  | "Preparation and Production of Advertising"
  | "Surveys and Polls"
  | "Travel Expenses"
  | "Utilities"
  | "Wages/Salaries/Benefits";

export type ContributorType =
  | "Business Entity"
  | "Candidate’s Immediate Family"
  | "Individual"
  | "Labor Organization"
  | "Other"
  | "Political Committee"
  | "Political Party Committee"
  | "Unregistered Committee";

export type OaeType =
  | "Allowable"
  | "In-Kind"
  | "Matchable"
  | "Other"
  | "Public Matching Contribution"
  | "Qualifying"
  | "Seed Money";

export type Contribution = {
  address1: string;
  address2: string;
  amount: string;
  checkNumber: string;
  city: string;
  contributorType: ContributorType;
  contrPrefix: string;
  county: string;
  date: string;
  email: string;
  employerCity: string;
  employerCountry: string;
  employerName: string;
  employerState: string;
  firstName: string;
  inKindType?: InKindType;
  lastName: string;
  middleInitial: string;
  name: string;
  notes: string;
  oaeType: OaeType;
  occupation: string;
  occupationLetterDate: string;
  paymentMethod?: PaymentMethod;
  phone: string;
  phoneType: string;
  state: string;
  subType: ContributionSubType;
  suffix: string;
  title: string;
  type: ContributionType;
  zip: string;
};

export type Expenditure = {};
