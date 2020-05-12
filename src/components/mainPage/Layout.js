import React from 'react'
import SearchBar from './SearchBar'
// import SearchHistory from './SearchHistory'
import CurrentWeather from './CurrentWeather'
import ErrorAlert from './ErrorAlert'
import { connect } from 'react-redux'
import {Container} from 'react-bootstrap'



const Layout = ({weather}) => {

 const { loading, error} = weather
 
 return (
        <section className="page-wrapper py-5">
        <Container>
             <SearchBar />
             { error && <ErrorAlert/> }
             {/* {!loading && <SearchHistory/>} */}
             {!loading && <CurrentWeather/>}
        </Container>
        </section>
    )
}

const mapStateToProps= state => ({
    weather: state.weather
})

export default connect(mapStateToProps, null )(Layout)