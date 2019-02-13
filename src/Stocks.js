import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'

class Stocks extends Component {
    constructor(){
        super();
        this.state = {
            stockList: [],
            loading: false
        }
    }

    componentDidMount(){
        this.setState({loading: true});
        fetch('https://www.worldtradingdata.com/api/v1/stock?symbol=AAPL,MSFT,AMZN,FB,TSLA&api_token=zo2Mdf3G00jHYVSZYw1CynH31f25CGbPjpo2kFvwuuR4Xdb83IkiXBNLmN4s')
        .then(res=>{
           return res.json();
        })
        .then(dados=>{
            console.log(dados)
            this.setState({stockList: dados.data, loading: false})
        })
    }

    
    render() {
        if(this.state.loading){
            return (<div><h1>Loading...</h1></div>)
        }
        
        return (
            <div>
                <h1>Dados</h1>
                <CardColumns>
                {this.state.stockList.map(stock=>{
                    let pointer = '';
                    if(stock.change_pct > 0){
                        pointer =  String.fromCharCode(8593)
                    }  else pointer = String.fromCharCode(8595)
                    return (

<Card  key={stock.symbol} style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>{stock.name}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">{stock.symbol}</Card.Subtitle>
  <Card.Text>
{stock.currency} 
  <strong style={{fontSize: '2em'}}> ${stock.price}</strong> <span style={{color: stock.change_pct > 0 ? 'green' : 'red'}}>{stock.change_pct}% {pointer}</span>
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Fechado ontem: {stock.close_yesterday} <br/> Aberto hoje: {stock.price_open}</Card.Subtitle>
  
</Card.Body>
</Card>                     
                    )
                })}

</CardColumns>
            </div>
        )
    }
}

export default Stocks;
