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
  return (
    <>
    <div className="bg-zinc-950 w-full p-7 flex justify-between flex-wrap gap-5">
      <Card className="bg-zinc-600 border-teal-50"
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
      />
    </div>
    </>
  )
}

export default App
