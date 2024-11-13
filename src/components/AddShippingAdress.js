import React from "react";

class AddShippingAdress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: "",
      State: "",
      Postcode: ""
    }
  }
  render() {
    return (
      <div className="purchasesCard">
         <h3 className="shippingAdress">SHIPPING ADRESS</h3>
      <form>
        <input type="text" id="city" name="city" value="city" onChange={(e) => this.setState({ city: e.target.value })}/><br></br><br></br>
         <input type="text" id="State" name="State" value="State" onChange={(e) => this.setState({ State: e.target.value })}/><br></br><br></br>
        <input type="text" id="Postcode / Zip" name="Postcode / Zip" value="Postcode / Zip" onChange={(e) => this.setState({ Postcode: e.target.value })}/><br></br><br></br>
        <input className="button" type="button" value="GET A QUOTE"></input>
      </form>
      </div>
    )
  }
}
export default AddShippingAdress