import React from "react";

import NewCard from "./components/newCard"; //default export mein import kisi bhi nam se kr skte hain(newCard->Newcard)
const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      company: "Amazon",
      datePosted: "2 weeks ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$52/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      company: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "London, UK",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      company: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "California, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      company: "Netflix",
      datePosted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$78/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      company: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      company: "Adobe",
      datePosted: "6 days ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$46/hr",
      location: "Delhi, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/uber.com",
      company: "Uber",
      datePosted: "12 days ago",
      post: "Android Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      company: "Salesforce",
      datePosted: "8 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$69/hr",
      location: "Dublin, Ireland",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      company: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India",
    },
  ];

  console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, index) {
        return (
          <NewCard
            key={index} /* <--learn this*/
            company={elem.company}
            post={elem.post}
            datePosted={elem.datePosted}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
            brandLogo={elem.brandLogo}
          />
        );
      })}
    </div>
  );
};

export default App;
