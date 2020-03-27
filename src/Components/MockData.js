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
    },
    {
      name: "Make Masks",
      description: "Make masks for those who need them",
      localDemand: Math.round(Math.random() * 10)
    }
  ];
};

export const mockHelpOptions = () => {
  return [
    {
      name: "House Calls",
      description:
        "Get calls to your home to check on you, chat a little, and socialize while social distancing",
      localDemand: Math.round(Math.random() * 10)
    },
    {
      name: "Meals",
      description: "Get a home cooked meal from someone in the community",
      localDemand: Math.round(Math.random() * 10)
    },
    {
      name: "Mask",
      description:
        "Get a locally made mask to be safe when you're running essential errands",
      localDemand: Math.round(Math.random() * 10)
    }
  ];
};
