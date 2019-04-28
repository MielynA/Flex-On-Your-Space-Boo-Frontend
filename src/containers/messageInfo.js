import React from 'react';
import NasaAxiosService from '../services/axios/nasa';
import Horoscope from '../services/utilities/horoscope';
import CardAxiosService from '../services/axios/card';
import { withRouter } from 'react-router-dom';

class MessageInfo extends React.Component {

    state = {
        toName: '',
        fromName: '',
        personalNote: '',
        title: '',
        img_url: '',
        spaceDate: '',
        description: '',
        error: null
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    checkRequired = () => {
        const { spaceDate } = this.state;
        return spaceDate.length > 0
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { toName, fromName, personalNote, spaceDate } = this.state;

        const isRequired = this.checkRequired();

        if (!isRequired) {
            this.setState({ error: 'Please provide a date' })
        }
        else {
            const sign = Horoscope.getHoroscopeSign(spaceDate)
            NasaAxiosService.getSpaceInfo(spaceDate)
                .then(({ hdurl, explanation, title }) => {
                    return CardAxiosService.createSpaceCard(
                        toName,
                        fromName,
                        personalNote,
                        hdurl,
                        sign,
                        spaceDate,
                        explanation,
                        title
                        // toName, fromName, personalNote, img_url, horoscopeSign, date, spaceDate, description, title
                    )
                }, () => this.setState({ error: 'Please provide a valid date' }))
                .then(({ data }) => {
                    this.props.history.push('/spacecard/' + data[0].id)
                })
        }
    }

    render() {
        const { error } = this.state;

        return (
            <div className="form-align">
            <form className='needs-validation form' onSubmit={this.handleSubmit}>
                <div>
                    <label className="sr-only" htmlFor="inlineFormInputGroup">To</label>
                    <div className="input-group mb-2">
                        <input type="text" className="form-control field" onChange={this.handleChange} name='toName' id="inlineFormInputGroup" placeholder="Ya boo's name..." />
                    </div>
            
            
                    <label className="sr-only" htmlFor="inlineFormInputGroup">From:</label>
                    <div className="input-group mb-2">
                        <input type="text" className="form-control field" onChange={this.handleChange} name='fromName' id="inlineFormInputGroup" placeholder="(Optional) Your name..." />
                    </div>
            
       
                    <p>Choose your space fate...</p>
                    <input type="date" className=' mb-2 field' onChange={this.handleChange} name="spaceDate" />
                    {error ? <h2 style={{color: 'red'}}className='ml-2'>{error}</h2> : null}
          </div>
                <textarea className="form-control field" name='personalNote' id="exampleFormControlTextarea1" rows="2" placeholder='Write Personal Note'></textarea>
                <button style={{backgroundColor: 'purple'}}type="submit" className="btn btn-primary ml-3 my-2">Submit</button>
               
            </form>
            </div>
        )
    }
}

export default withRouter(MessageInfo);