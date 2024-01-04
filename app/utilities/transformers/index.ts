import type { Entry } from "../act-blue";
import type * as SmallDonor from "../small-donor";
import type * as OreStar from "../orestar";

export const ActBlue = {
  extract: {
    smallDonor: {
      contribution(actBlueEntry: Entry): SmallDonor.Contribution {
        return {
          address1: Entry.donor.addr1,
          address2: Entry.donor.addr2,
          amount: Entry.lineItems[0].amount,
          checkNumber: "string;",
          city: "string;",
          contributorType: "string;",
          contrPrefix: "string;",
          county: "string;",
          date: "string;",
          email: "string;",
          employerCity: "string;",
          employerCountry: "string;",
          employerName: "string;",
          employerState: "string;",
          firstName: "string;",
          lastName: "string;",
          middleInitial: "string;",
          name: "string;",
          notes: "string;",
          oaeType: "string;",
          occupation: "string;",
          occupationLetterDate: "string;",
          paymentMethod: "Credit Card (Online)",
          phone: "string;",
          phoneType: "string;",
          state: "string;",
          subType: "Cash Contribution",
          suffix: "string;",
          title: "string;",
          type: "Contribution",
          zip: "string;",
        };
      },
      expenditure(actBlueEntry: Entry): SmallDonor.Expenditure {
        return {};
      },
    },
    orestar: {
      contribution(actBlueEntry: Entry): OreStar.Contribution {
        return {};
      },
      entity(actBlueEntry: Entry): OreStar.Entity {
        return {};
      },
      expenditure(actBlueEntry: Entry): OreStar.Expenditure {
        return {};
      },
    },
  },
};
