type Employer = {
  employer: "Wunsch-Homenick";
  occupation: "firefighter";
  employerAddr1: "123 Main St";
  employerCity: "Chicago";
  employerState: "IL";
  employerCountry: "United States";
};

type Donor = {
  firstname: "Herbert";
  lastname: "O'Hackett";
  addr1: "150 Declan Crest";
  city: "South Carlottafurt";
  state: "HI";
  zip: "58554-4467";
  country: "United States";
  isEligibleForExpressLane: false;
  employerData: Employer;
  email: "agnes_schmidt@buckridge.com";
  phone: "545-370-1537 x9178";
};

type Contribution = {
  createdAt: "2022-10-18T12:45:24-05:00";
  orderNumber: "AB233546164";
  contributionForm: "maximetemporibusnecessitatibus1";
  refcodes: {};
  refcode: null;
  refcode2: null;
  creditCardExpiration: "10/2024";
  recurringPeriod: "once";
  recurringDuration: 1;
  weeklyRecurringSunset: null;
  abTestName: null;
  isRecurring: false;
  isPaypal: false;
  isMobile: false;
  abTestVariation: null;
  isExpress: false;
  withExpressLane: false;
  expressSignup: false;
  uniqueIdentifier: "435634b4-9a61-4136-bcca-efa92a55d3d6";
  textMessageOption: "unknown";
  giftDeclined: null;
  giftIdentifier: null;
  shippingName: null;
  shippingAddr1: null;
  shippingCity: null;
  shippingState: null;
  shippingZip: null;
  shippingCountry: null;
  smartBoostAmount: null;
  customFields: [
    {
      label: "soluta_libero_1";
      answer: "quis_quod_1";
    },
  ];
  status: "approved";
  thanksUrl: "http://localhost:3000/thanks/AB233546164?success=true";
};

export type LineItem = {
  sequence: 0;
  entityId: 141347;
  fecId: "996782081";
  committeeName: "Cmte for Evalyn O'Walter";
  amount: "25.77";
  recurringAmount: null;
  paidAt: "2022-10-18T12:45:24-05:00";
  paymentId: 293834801;
  lineitemId: 477108065;
};

export type DonationForm = {
  name: "maximetemporibusnecessitatibus1";
  kind: "page";
  ownerEmail: "dante@stokes.org";
  managingEntityName: null;
  managingEntityCommitteeName: null;
};

export type Entry = {
  donor: Donor;
  contribution: Contribution;
  lineitems: LineItem[];
  form: DonationForm;
};
