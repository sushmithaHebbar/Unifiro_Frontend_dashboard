import * as yup from "yup";

export const startUpSchema = yup.object().shape({
  fullNameFounder: yup.string().required("Required"),
  gender: yup.string().required("Required"),
  age: yup.number().typeError("Must be a number").required("Required"),
  startupName: yup.string().required("Required"),
  location: yup.string().required("Required"),
  mobile: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  education: yup.string().required("Required"),
  stage: yup.string().required("Required"),
  sector: yup.string().required("Required"),
  description: yup
    .string()
    .min(20, "Please provide 3-5 sentences")
    .required("Required"),
  challenge: yup
    .string()
    .min(20, "Please provide 3-5 sentences")
    .required("Required"),

  problem: yup.string().required("Required"),
  targetMarket: yup.string().required("Required"),
  uvp: yup.string().required("Required"),
  hasTeam: yup.string().required("Required"),
  teamDetails: yup.string().when("hasTeam", {
    is: "Yes",
    then: (schema) => schema.required("Please provide team details"),
  }),
  hasRevenue: yup.string().required("Required"),
  mrr: yup.string().when("hasRevenue", {
    is: "Yes",
    then: (schema) => schema.required("Please provide average MRR"),
  }),
  hasIP: yup.string().required("Required"),
  isRaising: yup.string().required("Required"),
  raiseAmount: yup.string().when("isRaising", {
    is: "Yes",
    then: (schema) => schema.required("Please specify amount"),
  }),
  previousFunding: yup.string().required("Required"),
  longTermVision: yup.string().required("Required"),

  pitchDeck: yup
    .mixed()
    .test("required", "A pitch deck is required", (value) => {
      return value && value.length > 0;
    })
    .test("fileSize", "File size is too large (max 1MB)", (value) => {
      return value && value[0]?.size <= 1024 * 1024; 
    })
    .test("fileType", "Unsupported Format (PDF or PPTX only)", (value) => {
      return (
        value &&
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        ].includes(value[0]?.type)
      );
    }),

  confirmAccurate: yup.boolean().oneOf([true], "Required"),
  confirmDisqualification: yup.boolean().oneOf([true], "Required"),
  confirmContact: yup.boolean().oneOf([true], "Required"),
});

export const studentDetailsSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  mobileNumber: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Mobile number is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});
