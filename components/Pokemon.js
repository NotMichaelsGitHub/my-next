import React from "react";
import { Card } from 'react-bootstrap';
import Link from 'next/link'
// import Crow from '../images/me.jpg'

const Pokemon = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Michael's PC</h1>
          <p>
            My box of single page webs app that showcase a certain specific skill or technology 
          </p>
        </div>

        <div className='col-lg-3 col-md-6 col-12 pb-4'>
          <Card>
            {/* <Card.Img variant='top' src="http://static.pokemonpets.com/images/monsters-images-800-800/430-Honchkrow.png"/> */}
            <Card.Img variant='top' src="https://static.wikia.nocookie.net/pokemon/images/d/de/430Honchkrow_DP_anime.png/revision/latest/top-crop/width/300/height/300?cb=20150119231310"/>
            <Card.Body>
            <Card.Title>
              <Link href='https://www.honchkrow.com'>
                <a target='_blank'>
                  Honchkrow
                </a>
              </Link>
            </Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>Github Repo</Card.Subtitle>
                <Card.Text>
                  A barebones demo project that successfuly impliments the Redux Store and actions
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-3 col-md-6 col-12 pb-4'>

            <Card>
              {/* <Card.Img variant='top' src="http://static.pokemonpets.com/images/monsters-images-800-800/402-Kricketune.png"/> */}
              <Card.Img variant='top' src="https://i.imgur.com/fMMwGxH.png"/>
              <Card.Body>
                <Card.Title>
                  <Link href='https://www.kircketune.com'>
                  <a target='_blank'>
                    Kricketune
                  </a>
                </Link>
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Github Repo</Card.Subtitle>
                <Card.Text>
                  Dee dee dee wooooop
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

            <div className='col-lg-3 col-md-6 col-12 pb-4'>
              <Card>
                {/* <Card.Img variant='top' src="http://static.pokemonpets.com/images/monsters-images-800-800/409-Rampardos.png"/> */}
                <Card.Img variant='top' src="https://static.wikia.nocookie.net/pokemon/images/c/c5/409Rampardos_DP_anime.png/revision/latest/top-crop/width/300/height/300?cb=20141130005156"/>
                <Card.Body>
                  <Card.Title>Rampardos</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>Github Repo</Card.Subtitle>
                  <Card.Text>
                    Twitter bot that counts down the days until Jojo Part 7 gets announced 
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className='col-lg-3 col-md-6 col-12 pb-4'>
              <Card>
                {/* <Card.Img variant='top' src="http://static.pokemonpets.com/images/monsters-images-800-800/409-Rampardos.png"/> */}
                <Card.Img variant='top' src="https://i.ibb.co/59vZHH3/581-Swanna-BW-anime-1.webp"/>
                <Card.Body>
                  <Card.Title>
                    <Link href='https://www.jacksaregoingup.com'>
                      <a target='_blank'>
                        Swanna
                      </a>
                    </Link>
                  </Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>Github Repo</Card.Subtitle>
                  <Card.Text>
                    A web app that displays Swansea City's postition in the EFL Championship that demonstrates how to make API calls using React Hooks
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>


      </div>
    </div>
  );
};

export default Pokemon;
