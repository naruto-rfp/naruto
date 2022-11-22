import Card from './Card'

export default function Store() {
  const title = 'What is lorem ipsum'
  const image1 =
    'https://images.unsplash.com/photo-1580089595767-98745d7025c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  const image2 =
    'https://images.unsplash.com/photo-1577212017184-80cc0da11082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  const image3 =
    'https://images.unsplash.com/photo-1624765512426-78379eb079b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  const image4 =
    'https://images.unsplash.com/photo-1599265453021-dfd72c0e7008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  const price = '100.00'

  return (
    // container
    <div className="container">
      {/* <div className="w-full h-screen py-20 box-border flex justify-center items-center"> */}
      {/* row */}
      <div className="row">
        {/* <div className="flex justify-around ease-out duration-300 w-300px"> */}
        <Card
          title={title}
          images={image1}
          price={price}
          denomination="$"
          alt="Jerseys"
          date="25-10-22"
        />
        <Card
          title={title}
          images={image2}
          price={price}
          denomination="$"
          alt="Jerseys"
          date="25-10-22"
        />
        <Card
          title={title}
          images={image3}
          price={price}
          denomination="$"
          alt="Jerseys"
          date="25-10-22"
        />
        <Card
          title={title}
          images={image4}
          price={price}
          denomination="$"
          alt="Jerseys"
          date="25-10-22"
        />
      </div>
    </div>
  )
}
