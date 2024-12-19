import Card from '@/composants/card/Card.jsx';
import HomeBanner from '@/composants/HomeBanner';
import { useEffect, useState } from 'react';


function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('./data/logements.json');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])
  return (
    <>
      <HomeBanner />
      <div className='cards'>
        {data.map((logement) => (
          <Card key={logement.id} logementId={logement.id} titre={logement.title} image={logement.cover} />
        ))}
      </div>
    </>
  )
}

export default Home
