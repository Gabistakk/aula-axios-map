import { Fragment, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useSelector } from "react-redux"


function Cards() {

    const search = useSelector((state) => state.search.value)



    useEffect(() => {
        getData()
    }, [])

    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)

    const getData = async () => {
        try {
            const res = await axios.get("https://rickandmortyapi.com/api/character")
            setData(res.data['results'])
            setLoaded(true)
        }
        catch (err) {
            alert(err.message)
        }
    }

    return <Fragment>
        {loaded && data.filter((objeto) => {
            return search.toLowerCase() === ''
             ? objeto
              : objeto['name'].toLowerCase().includes(search)
        }).map((objeto) => {
            return (
                <Card style={{ width: '25%' }}>
                    <Card.Img src={objeto['image']} style={{ height: '15rem' }} variant="top" />
                    <Card.Body>
                        <Card.Title>{objeto['name']}</Card.Title>
                        <Card.Subtitle>{objeto['species']}</Card.Subtitle>
                        <Card.Text>
                            Origem: {objeto['origin']['name']}
                        </Card.Text>
                        <Button variant="primary" href={objeto['url']}>Ver Página</Button>
                    </Card.Body>
                </Card>
            )
        })}
    </Fragment>
}

export default Cards;