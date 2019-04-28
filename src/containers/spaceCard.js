import React from 'react';
import CardAxiosService from '../services/axios/card';
import moment from 'moment';
import './spaceCard.css';

export default class SpaceCard extends React.Component {
     
    constructor(props){
        super(props);
        this.state = {
            date: "", 
            spaceDate: "", 
            description: "", 
            fromname: "", 
            horoscropesign: "", 
            id: "", 
            img_url: "", 
            personalnote: "", 
            title: "", 
            toname: "",

        }
    }

    componentDidMount () {
        const id = this.props.match.params.id;
        CardAxiosService.getSpaceCard(id)
        .then(({msg}) => {
            const {
                date, 
                spaceDate, 
                description, 
                fromname, 
                horoscropesign, 
                id, 
                img_url, 
                personalnote, 
                title, 
                toname,
             } = msg;
             

            this.setState({ date, 
                spaceDate, 
                description, 
                fromname, 
                horoscropesign, 
                id, 
                img_url, 
                personalnote, 
                title, 
                toname })
        })
    }

   render(){

       const {
           date, 
           spaceDate, 
           description, 
           fromname, 
           horoscropesign, 
           id, 
           img_url, 
           personalnote, 
           title, 
           toname,
           
        } = this.state;
        
       const withoutName = <p>Dear My Boo</p>
       return(

           <React.Fragment>
            <div className="container text-white mt-4 mb-4 spaceCard-container">
                <div style={{height: '200px', background: 'transparent'}}></div>
    
                <div style={{backgroundColor: '#cfcfd1db', boxShadow: 'black 0px 16px 10px 0px'}}>
                    <div className='spaceCard-heart'></div>
                    <div className='spaceCard-imageBox' style={{backgroundImage: `url(${img_url})`}}>
                        <p className='spaceCard-center-flirt'>I'm attracted to you like the Earth is attracted to the Sun-with a large force inversely proportional to the distance squared</p>
                        <p className='space-grey spaceCard-date-right'>{moment(date).subtract(10, 'days').calendar()}</p>
                        <p className='space-grey spaceCard-horoscope-right'>{horoscropesign}</p>
                        <p className='space-grey spaceCard-date-left'>{moment(date).subtract(10, 'days').calendar()}</p>
                        <p className='space-grey spaceCard-horoscope-left'>{horoscropesign}</p>
                    </div>
                    <div className='spaceCard-Lorem'>
                        <h1 className="card-title mb-4 mt-4">{this.state.toname.length >0  ?  'Dear ' + this.state.toname : withoutName}</h1>
                        <div className='spaceCardArrow'></div>
                        <p>
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                        
                        </p>
                    </div>

                    <div className='spaceCard-Info'>
                        <p className="spaceCard-personalNote">Personal Note:{personalnote}</p>
                        <p className='spaceCard-nasaFact'>Facts: {description}</p>
                        {fromname ? <h1>From: {fromname}</h1> : null}
                        {/* <button className="ml-2 btn btn-primary">Share</button> */}
                    </div>
                </div>
                

             </div>               
           </React.Fragment>
       );
   }

}