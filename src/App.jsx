import Card from "./components/Card"

function App() {
  const hashtags = [
    'webdev',
    'javascript',
    'hello world',
    // 'programming',
    // 'learning',
    // 'AI ML'
  ]

  const images = [
    '/images/coding.jpg',
    '/images/download.jpg',
    '/images/language.jpg',
    '/images/laptop.jpg',
    '/images/technology.jpg',
  ]

  const cardData = [
    {
      heading: 'Mastering JavaScript',
      hashtags: ['JavaScript', 'Programming', 'WebDev'],
      bgImage: '/images/coding.jpg',
      createdAt: 'Yesterday 2pm',
      feedbackEnable: true,
    },
    {
      heading: 'Exploring Python Libraries',
      hashtags: ['Python', 'DataScience', 'Automation'],
      bgImage: '/images/download.jpg',
      createdAt: 'Today 12pm',
      feedbackEnable: true,
    },
    {
      heading: 'Building Responsive UIs',
      hashtags: ['CSS', 'Frontend', 'ResponsiveDesign'],
      bgImage: '/images/language.jpg',
      createdAt: 'Yesterday 6am',
      feedbackEnable: false,
    },
    {
      heading: 'Learning React Hooks',
      hashtags: ['React', 'JavaScript', 'WebDevelopment'],
      bgImage: '/images/laptop.jpg',
      createdAt: '2 days ago',
      feedbackEnable: true,
    },
    {
      heading: 'Optimizing Node.js Backend',
      hashtags: ['NodeJS', 'Backend', 'API'],
      bgImage: '/images/coding.jpg',
      createdAt: '24 hr ago',
      feedbackEnable: false,
    },
    {
      heading: 'Version Control with Git',
      hashtags: ['Git', 'VersionControl', 'Collaboration'],
      bgImage: '/images/technology.jpg',
      createdAt: '12 hr ago',
      feedbackEnable: true,
    },
    {
      heading: 'Deploying Apps with Docker',
      hashtags: ['Docker', 'DevOps', 'Containers'],
      bgImage: '/images/download.jpg',
      createdAt: '1 week ago',
      feedbackEnable: false,
    },
    {
      heading: 'Exploring Machine Learning',
      hashtags: ['MachineLearning', 'AI', 'DataScience'],
      bgImage: '/images/laptop.jpg',
      createdAt: 'Today 5 min ago',
      feedbackEnable: true,
    },
    {
      heading: 'Building with TypeScript',
      hashtags: ['TypeScript', 'JavaScript', 'WebDev'],
      bgImage: '/images/technology.jpg',
      createdAt: 'Today 1 min ago',
      feedbackEnable: true,
    },
    {
      heading: 'Working with Databases',
      hashtags: ['SQL', 'Database', 'DataManagement'],
      bgImage: '/images/coding.jpg',
      createdAt: 'Just now',
      feedbackEnable: false,
    }
  ];
  
  return (
    <>
    <div className="bg-zinc-950 w-full py-7 px-11 flex justify-start flex-wrap gap-32">
      {
        cardData.map((card) => (
          <Card key={card}
          className="bg-zinc-600 border-teal-50"
          heading={card.heading}
          profileImage=""
          hashtags={card.hashtags}
          bgImage={card.bgImage}
          createdAt={card.createdAt}
          feedbackEnabled={card.feedbackEnable}
          />
        ))
      }
      {/* <Card className="bg-zinc-600 border-teal-50"
            heading=''
            profileImage=''
            hashtags={hashtags}
            bgImage={images[0]}
      />
      <Card className="bg-zinc-600 border-teal-50"
            heading=''
            profileImage=''
            hashtags={hashtags}
            bgImage={images[1]}
            feedbackEnabled={false}
      />
      <Card className="bg-zinc-600 border-teal-50"
            heading=''
            profileImage=''
            hashtags={hashtags}
            bgImage={images[2]}
            feedbackEnabled={true}
      />
      <Card className="bg-zinc-600 border-teal-50"
            heading=''
            profileImage=''
            hashtags={hashtags}
            bgImage={images[3]}
            feedbackEnabled={true}
      />
      <Card className="bg-zinc-600 border-teal-50"
            heading=''
            profileImage=''
            hashtags={hashtags}
            bgImage={images[4]}
            feedbackEnabled={true}
      /> */}
    </div>
    </>
  )
}

export default App
