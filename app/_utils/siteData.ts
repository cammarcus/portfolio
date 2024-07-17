export const professionalExperienceData = {
    jobs: [
      {
        title: 'IT Associate (Software Developer)',
        company: 'Essent Guaranty',
        location: 'Winston-Salem, NC',
        startDate: new Date(2023, 7, 1), // August 2023
        endDate: null,
        jobPoints: [
          'Support transition from Oracle to AWS cloud services, creating Step Functions to confirm data integrity',
          'Deliver Front-End user stories for React with Typescript, Redux, and Saga environment',
          'Implement API changes in Python using AWS CDK, interacting with both SQL and NoSQL databases',
          'Demo user stories to business users and other relevant stakeholders'
        ]
      },
      {
        title: 'Co-Founder / CEO',
        company: 'EscapeGoat',
        location: 'Baltimore, MD',
        startDate: new Date(2023, 0, 1), // January 2023
        endDate: null,
        jobPoints: [
          'Develop innovative platform for travel content creators with cutting-edge technologies, such as Next.js',
          'Applied and accepted in JHU-sponsored accelerator, JHU summer incubator, and other pitch competitions',
          'Perform in-depth market research, communicating with hundreds of current content creators in the process',
          'Collaborate with other developers and a marketing manager to engineer and promote the up-and-coming platform'
        ]
      },
      {
        title: 'Business Systems Analyst Intern',
        company: 'Envestnet',
        location: 'Berwyn, PA',
        startDate: new Date(2022, 5, 1), // June 2022
        endDate: new Date(2022, 7, 1), // August 2022
        jobPoints: [
          'Operated as an assistant project owner in an agile environment, developing my skills with scrum methodologies',
          'Collaborated to develop and present business solutions to company CEO and senior executives',
          'Codeveloped React Native app in a small team to expand societal accessibility to financial education',
          'United and networked with employees in several teams, better understanding fintech systems and technology'
        ]
      },
      {
        title: 'Business Development Strategist',
        company: 'Happy Being',
        location: 'Valley Forge, PA',
        startDate: new Date(2021, 5, 1), // June 2021
        endDate: new Date(2022, 7, 1), // August 2022
        jobPoints: [
          'Spearheaded implementation of brand into new markets, managing farmers market and yoga studio pop-up shops',
          'Fostered client-brand relationships through social media platforms, recruiting ambassadors and sponsors',
          'Analyzed competitor and consumer data to improve and develop product pricing strategies'
        ]
      },
      {
        title: 'Analyst Intern',
        company: 'Pinkaloo Technologies (now a part of Ren)',
        location: 'Baltimore, MD',
        startDate: new Date(2020, 4, 1), // May 2020
        endDate: new Date(2020, 7, 1), // August 2020
        jobPoints: [
          'Researched and identified potential clients to develop new strategies to improve philanthropy',
          'Predicted future financial insights through analysis of key features in data sets of charitable donations'
        ]
      }
    ]
  };

  export const projectsData = {
    projects: [
        {
            title: 'The True Price of a Mocha',
            description: "A project I am currently working on with a peer from Johns Hopkins. As a research project for her Masters in Environment and Sustainability Management at Georgetown University, my friend Emily Javedan did research on coffee shops in the Georgetown area. I worked with her to design and build a website to her specifications, and we're curently enhancing the website to better meet the needs of users. This was built with Next.js, deployed on Vercel and uses Firebase for the backend.",
            link: 'https://www.thetruepriceofamocha.com/'
        },
        {
            title: 'Groops',
            description: "One of my favorite games to play with my girlfriend is Connections (a word puzzle) by the New York Times. However, a new one releases only once a day, and I also wanted to be able to create custom games. So, I built an unlimited version where users can also create their own games. I built this in React and utilized AWS (API Gateway, S3 for hosting, DynamoDB for the database).",
            link: 'http://first-attempt-static-for-groops.s3-website-us-east-1.amazonaws.com/',
        },
        {
            title: "Dijkstra's Word Path",
            description: "This is still a work in progress and the front end is simply just a placeholder UI to interact with the API. I was inspired by a game called weaver: https://wordwormdormdork.com/ where you must find the shortest path between two four letter words. I wanted to see if there was a way to verify that a path is indeed the shortest between two words, so I created an API that utilizes Dijkstra's alogrithm to find the shortest path.",
            link: 'http://dikstras-words.s3-website-us-east-1.amazonaws.com/'
        }
    ]
  }