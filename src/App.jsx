import Card from './composants/card/Card.jsx';
import HomeBanner from './composants/HomeBanner/HomeBanner.jsx';
import data from './data/logements.json';

function App() {
  console.log(data);
  return (
    <>
      <HomeBanner />
      <div className='cards'>
        {data.map((logement) => (
          <Card key={logement.id} titre={logement.title} image={logement.cover} />
        ))}
      </div>
    </>
  )
}

export default App
