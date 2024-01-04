import { expect, test } from "vitest";
import { ExampleContribution } from "../app/utilities/small-donor/stub";
import { ExampleEntry } from "../app/utilities/act-blue/stub";
import { ActBlue } from "../app/utilities/transformers";

test("ActBlue transformer", () => {
  const result = ActBlue.extract.smallDonor.contribution(ExampleEntry);
  expect(result).toBe(true);
});
