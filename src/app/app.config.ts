export const AppConfig = {
  apiBaseURL: "https://api.spaceXdata.com/v3/launches",
  defaultFilter: { limit: 100 },
  filters: [
    {
      name: "Launch Year",
      id: "launch_year",
      filter: [
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
      ],
    },
    {
      name: "Successful Launch",
      id: "launch_success",
      filter: ["True", "False"],
    },
    {
      name: "Successful Landing",
      id: "land_success",
      filter: ["True", "False"],
    },
  ],
};
