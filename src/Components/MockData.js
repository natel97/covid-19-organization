export const mockVolunteerOpportunities = () => {
  return [
    {
      name: "House Calls",
      description: "Make phone calls to ensure the safety of others",
      localDemand: Math.round(Math.random() * 10)
    },
    {
      name: "Transportation",
      description:
        "Transport and distibute items to those who need it. Items include food / meals, masks, and sanatization items.",
      localDemand: Math.round(Math.random() * 10)
    },
    {
      name: "Cooking",
      description: "Cook meals for those who need a healthy and wholesome meal",
      localDemand: Math.round(Math.random() * 10)
    }
  ];
};
