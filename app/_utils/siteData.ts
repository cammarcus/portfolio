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
      ],
      image: '/essent.jpg',
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
      ],
      image: '/EscapeGoat.jpg',
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
      ],
      image: '/envestnet.jpg',
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
      ],
      image: '/happy_being.jpg',
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
      ],
      image: '/pinkaloo.png',
    }
  ]
};

export const projectsData = {
  projects: [
    {
      title: 'The True Price of a Mocha',
      description: "A project I am currently working on with a peer from Johns Hopkins. As a research project for her Masters in Environment and Sustainability Management at Georgetown University, my friend Emily Javedan collected data on coffee shops in the Georgetown area. I worked with her to design and build a website to her specifications, and we're curently enhancing the website to better meet the needs of users. This was built with Next.js, deployed on Vercel and uses Firebase for the backend.",
      link: 'https://www.thetruepriceofamocha.com/',
      image: '/ttpoam.jpg',
      skills: ['Next.js', 'Tailwind', 'UX', 'Agile']
    },
    {
      title: 'Groops',
      description: "One of my favorite games to play with is Connections (a word puzzle) by the New York Times. However, a new one releases only once a day, and I also wanted to be able to create custom games. So, I built an unlimited version where users can also create their own games. I built this in React and utilized AWS (API Gateway, S3 for hosting, DynamoDB for the database).",
      link: 'http://first-attempt-static-for-groops.s3-website-us-east-1.amazonaws.com/',
      image: '/groops.jpg',
      skills: ['AWS Serverless', 'S3', 'DynamoDB', 'API Gateway', 'Lambda Functions']
    },
    {
      title: "Dijkstra's Word Path",
      description: "Web application that uses Dijkstra's algorithm to find the shortest path between two words by changing one letter at a time, inspired by the game Weaver from wordwormdormdork.com. The frontend, built with React and styled with Tailwind CSS, interacts with a Node.js and Express. Both the frontend and backend are deployed on an AWS EC2 instance. This setup ensures a responsive user experience and efficient handling of word transformations.",
      link: 'http://54.167.171.72/',
      image: '/dijkstra.jpg',
      skills: ['Node.js', 'Express', 'EC2', 'Axios']
    },
    {
      title: 'Hirehound',
      description: "Develop job platform and chrome extension “HireHound” using Next.js, React.js, and Javascript as a way to pull and merge application data from multiple job websites into one, easy-to-use web app while providing feedback.",
      link: "/",
      image: '/',
      skills: ['React Native']
    },
    {
      title: 'Financial Education App',
      description: "Developed during my internship at Envestnet, this financial education app, built with React Native, offers a gamified approach to learning finances, akin to Duolingo for financial literacy. The app was showcased to the CEO and C-suite executives. Although not currently deployed, a demonstration video is available on YouTube.",
      link: "https://youtu.be/t8dt6HJul7A?si=fPQmFmEQMKLzioJj",
      image: '/fin_ed.jpg',
      skills: ['React Native']
    }
  ]
}